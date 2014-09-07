$(document).ready(function(){
    setInterval(function () {
        
        $('#stream-items-id > li:contains("hate")').remove()
    }, 500);
});

chrome.extension.onMessage.addListener ( function(request, sender, message){

	console.log(request);
	$('#stream-items-id > li:contains(' + request.filter + ')').remove();
});