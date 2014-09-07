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
chrome.storage.sync.get("keys", function(a) {
	keywordContainer = a.keys;
});

<<<<<<< HEAD
var keywordContainer = [];

function addKeyword() {

	var filter = document.createElement("input");
	filter.setAttribute("type", "checkbox");
	filter.setAttribute("checked", "true");
	filter.setAttribute("value", document.getElementById("key").value);
	
	chrome.storage.sync.get("keywords", function(keywords){
		filter.setAttribute("id", "word" + keywords.length);
	});

	//document.getElementById("main").innerHTML += "<input type='checkbox' checked='true' value=" + document.getElementById("key").value + "/>";

	chrome.storage.sync.get("keywords", function(keywords) {
		keywords[keywords.length] = filter;
	})
}

function loadKeywords() {

	chrome.storage.sync.get("keywords", function(keywords) {
		for(var i = 0; i < keywords.length; ++i)
		{
			document.getElementById("main").appendChild(keywords[i]);
=======
for(var j=0; j>keywordContainer.length; j++) {
	window.alert(keywordContainer[0].key)
}

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
	
	chrome.storage.sync.get("keys", function(a){
		span.setAttribute("id", "word" + a.keys.length);
		keywordContainer = a.keys;
	});

	keywordContainer.push({"key":span.innerText});
	console.log(keywordContainer);

	chrome.storage.sync.set({
		keys:keywordContainer
	}, function(){
		console.log(keywordContainer);
	});

	document.getElementById("main").appendChild(span);
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
>>>>>>> b1ae676490055a5e4f9cfe6f601e25e2979a4c98
		}
	});
}

document.addEventListener("DOMContentLoaded", function(){
<<<<<<< HEAD
	
	chrome.storage.sync.set({"keywords": keywordContainer}, function(){
		console.log("word" + 3);
	});

	//loadKeywords();

	document.getElementById("inputbox").addEventListener("submit", function(){
	 	//addKeyword();
	// 	loadKeywords();
	});

	document.getElementById("key").addEventListener("keypress"), function(){
		if(event.keyCode == 13)
		{
			//addKeyword();
			window.alert("We good.");
		}
	}
=======

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

	loadKeywords();

	/*chrome.storage.sync.get("keys", function(a){
		console.log("This could work if I say" + " " + a.keys[0].key);
	});*/


	document.getElementById("sbox").addEventListener("click", function(){
		addKeyword();
	});

	document.getElementById("clear").addEventListener("click", function(){
		keywordContainer = [];
		chrome.storage.sync.set({
			keys:keywordContainer
		});
		loadKeywords();
	});
>>>>>>> b1ae676490055a5e4f9cfe6f601e25e2979a4c98

});
