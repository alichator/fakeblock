function addCheckbox() {
		/*
		var text = document.getElementById("keyword").value;
		var filter = document.createElement("INPUT");
		filter.setAttribute("type", "checkbox");
		//filter.setAttribute("checked", "true");
		document.body.appendChild(filter);
		*/
		var text = document.getElementById("key").value;
		console.log(text);
		document.body.appendChild(document.createElement("BUTTON"));
	
}

document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("inputbox").addEventListener("onsubmit", function(){
		var text = document.getElementById("key").value;
		console.log(text);
		document.body.appendChild(document.createElement("BUTTON"));
	});

});
	