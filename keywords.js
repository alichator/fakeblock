// function addCheckbox() {
// 		/*
// 		var text = document.getElementById("keyword").value;
// 		var filter = document.createElement("INPUT");
// 		filter.setAttribute("type", "checkbox");
// 		//filter.setAttribute("checked", "true");
// 		document.body.appendChild(filter);
// 		*/
// 		var text = document.getElementById("key").value;
// 		console.log(text);
// 		document.body.appendChild(document.createElement("BUTTON"));
	
// };
var keywordContainer = [];

function addKeyword() {

	var check = document.createElement("input");
	check.setAttribute("type", "checkbox");
	check.setAttribute("checked", "true");
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
		keywordContainer.push({"key":span.innerText});

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
			span.appendChild(check);
			span.innerHTML += a.keys[i].key;
			document.getElementById("main").appendChild(span);

			document.getElementById("main").appendChild(document.createElement("br"));
		}
	});
}

document.addEventListener("DOMContentLoaded", function(){


	/*var mine = "Hello";
	var your = "World";
	chrome.storage.sync.set({
		empList:employees,
		keys:keywordContainer	
	}, function(){
		console.log(employees[0].firstName);
	});*/

	// keywordContainer = [
	// 	{"key":"test"},
	// 	{"key":"test2"}
	// ];
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

	document.getElementById("clear").addEventListener("click", function(){
		keywordContainer = [];
		chrome.storage.sync.set({
			keys:keywordContainer
		});
		loadKeywords();
		location.reload();
	});

});
