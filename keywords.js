var keywordContainer = [];

function addKeyword() {

	var check = document.createElement("input");
	check.setAttribute("type", "checkbox");
	check.setAttribute("checked", true);
	// check.addEventListener("click", function(){
	// 	var temp = a.keys;
	// 	if(check.checked){
	// 		temp[i].check = "true";
	// 	}
	// 	else temp[i].check = "false";
	// 	chrome.storage.sync.set({keys:temp});
	// });
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
								"check":"true"});
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
			check.setAttribute("value", a.keys[i].key);
			// check.addEventListener("click", function(){
			// 	var temp = a.keys;
			// 	if(check.checked){
			// 		temp[i].check = "true";
			// 	}
			// 	else temp[i].check = "false";
			// 	chrome.storage.sync.set({keys:temp});
			// });
			if(a.keys[i].check == "true"){
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

	

	/*chrome.storage.sync.get("keys", function(a){
		console.log("This could work if I say" + " " + a.keys[0].key);
	});*/


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
		for(var k = 0; k < keywordContainer.length; ++k)
		{
			document.getElementById("word" + k).addEventListener("click", function(){
				chrome.storage.sync.get("keys", function(a){
					var temp = a.keys;
					if(document.getElementById("word" + k).checked){
						temp[k].check = "true";
					}
					else temp[k].check = "false";
					chrome.storage.sync.set({keys:temp});
				});
			});
		}
	})

	document.getElementById("clear").addEventListener("click", function(){
		keywordContainer = [];
		chrome.storage.sync.set({
			keys:keywordContainer
		});
		loadKeywords();
		location.reload();
	});

});
