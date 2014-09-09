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

	chrome.extension.sendMessage({filter:span.innerText, check: "t"});
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
		chrome.storage.sync.get("keys", function(a){
		    for(var i=0; i<a.keys.length; i++){
		        chrome.extension.sendMessage({filter:a.keys[i].key, check: a.keys[i].check});
		    }
        });
	});

	document.getElementById("key").addEventListener("keypress", function(){
		if(event.keyCode == 13)
		{
			addKeyword();
			chrome.storage.sync.get("keys", function(a){
			    for(var i=0; i<a.keys.length; i++){
		        	chrome.extension.sendMessage({filter:a.keys[i].key, check: a.keys[i].check});
		    	}
	        });
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

		chrome.storage.sync.get("keys", function(a){
		    for(var i=0; i<a.keys.length; i++){
		        chrome.extension.sendMessage({filter:a.keys[i].key, check: a.keys[i].check});
		    }
        });
	});

	document.getElementById("clear").addEventListener("click", function(){
		keywordContainer = [];
		chrome.storage.sync.set({
			keys:keywordContainer
		});
		loadKeywords();

		chrome.extension.sendMessage({clear: "clear"});

		location.reload();
	});

});
