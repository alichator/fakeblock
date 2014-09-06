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
