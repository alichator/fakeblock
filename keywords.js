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

var keywordContainer = ["hello"];

function addKeyword() {

	var filter = document.createElement("input");
	filter.setAttribute("type", "checkbox");
	filter.setAttribute("checked", "true");
	filter.setAttribute("name", document.getElementById("key").value);
	
	chrome.storage.local.get("keywords", function(keywords){
		filter.setAttribute("id", "word" + keywords.length);
	});

	document.getElementById("main").appendChild(filter);

	chrome.storage.local.get("keywords", function(keywords) {
		keywords[keywords.length] = filter;
	})
}

function loadKeywords() {

	chrome.storage.local.get("keywords", function (keywords) {
		for(var i = 0; i < keywords.length; ++i)
		{
			document.getElementById("main").appendChild(keywords[i]);
		}
	});

}

document.addEventListener("DOMContentLoaded", function(){
	
	chrome.storage.local.set({"keywords": "hello"});
	//loadKeywords();

	chrome.storage.local.get("keywords", function(a){
		window.alert("keywords" + a);
	});


	// document.getElementById("inputbox").addEventListener("submit", function(){
	// 	addKeyword();
	// 	loadKeywords();
	// });

});