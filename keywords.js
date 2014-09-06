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


function addKeyword() {

	var field = document.createElement("p");
	field.innerHTML = document.getElementById("key").value;
	
	var filter = document.createElement("input");
	filter.setAttribute("type", "checkbox");
	
	var keywordField = document.createElement("div");
	keywordField.appendChild(filter);
	keywordField.appendChild(field);
	document.body.appendChild(keywordField);

}

function loadKeywords() {

	chrome.storage.sync.get(null, function (object items) {
		
	})

}

document.addEventListener("DOMContentLoaded", function(){
	
	loadKeywords();




	document.getElementById("inputbox").addEventListener("submit", function(){
		addKeyword();
	});

});