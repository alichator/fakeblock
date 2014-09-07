var keywordContainer = [];

function addKeyword() {

	var check = document.createElement("input");
	check.setAttribute("type", "checkbox");
	check.setAttribute("checked", true);
	check.setAttribute("class", "checkKey");
	var span = document.createElement("span");
	span.appendChild(check);
	if(document.getElementById("key").value != "")
	{
		span.innerHTML += document.getElementById("key").value;
	}
	else
	{
		return;
	}
	document.getElementById("key").value = "";
	
	var repeat = false;
	chrome.storage.sync.get("keys", function(a){
		span.setAttribute("id", "word" + a.keys.length);
		keywordContainer = a.keys;
		keywordContainer.push({"key":span.innerText,
								"check":"t"});
		chrome.storage.sync.set({
			keys:keywordContainer
		});

	});

	document.getElementById("main").appendChild(span);
	document.getElementById("main").appendChild(document.createElement("br"));
}

function loadKeywords() {
	chrome.storage.sync.get("keys", function(a) {
		for(var i=0; i<a.keys.length; i++){
			var span = document.createElement("span");
			var check = document.createElement("input");
			check.setAttribute("type", "checkbox");
			check.setAttribute("id", "word" + i);
			check.setAttribute("class", "checkKey");
			check.setAttribute("value", a.keys[i].key);
			if(a.keys[i].check == "t"){
				check.setAttribute("checked", true);
			}
			span.appendChild(check);
			span.innerHTML += a.keys[i].key;
			document.getElementById("main").appendChild(span);
			document.getElementById("main").appendChild(document.createElement("br"));
		}
	});
}

document.addEventListener("DOMContentLoaded", function(){

	chrome.storage.sync.get("keys", function(a) {
		keywordContainer = a.keys;
	});

	loadKeywords();

	document.getElementById("sbox").addEventListener("click", function(){
		addKeyword();
	});

	document.getElementById("key").addEventListener("keypress", function(){
		if(event.keyCode == 13)
		{
			addKeyword();
		}
	});

	document.getElementById("main").addEventListener("click", function(){
		var allChecks = document.getElementsByClassName("checkKey");
		for(var k = 0; k < keywordContainer.length; ++k)
		{
			if(allChecks[k].checked == true) keywordContainer[k].check = "t";
			if(allChecks[k].checked == false) keywordContainer[k].check = "f";
		}
		chrome.storage.sync.set({keys:keywordContainer});
	});

	document.getElementById("clear").addEventListener("click", function(){
		keywordContainer = [];
		chrome.storage.sync.set({
			keys:keywordContainer
		});
		loadKeywords();
		location.reload();
	});

	document.body.addEventListener("click", function(){
		chrome.storage.sync.get("keys", function(a){
		    for(var i=0; i<a.keys.length; i++){
		        if(a.keys[i].check == "t"){
		         	chrome.extension.sendMessage({filter:a.keys[i].key});
		        }
		    }
        });
	});

	document.getElementById("inputbox").addEventListener("keypress", function(){
		if(event.keyCode == 13){	
			chrome.storage.sync.get("keys", function(a){
			    for(var i=0; i<a.keys.length; i++){
			        if(a.keys[i].check == "t"){
			         	chrome.extension.sendMessage({filter:a.keys[i].key});
			        }
			    }
	        });
	    }
	});
});
