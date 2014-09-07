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
		}
	});

}

document.addEventListener("DOMContentLoaded", function(){
	
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

});