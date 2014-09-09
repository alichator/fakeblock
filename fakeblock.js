// $(document).ready(function(){
//     setInterval(function () {
        
//         $('#stream-items-id > li:contains("hate")').remove()
//     }, 500);
// });

chrome.extension.onMessage.addListener ( function(request, sender, message){

	console.log(request);
	if(request.clear == "clear")
	{
		$('#stream-items-id > li').show();
	}
	else
	{	
		if(request.check == "t")
		{
			$('#stream-items-id > li:contains(' + request.filter + ')').hide();
		}
		else if(request.check == "f")
		{
			$('#stream-items-id > li:contains(' + request.filter + ')').show();
		}
		else
		{
			window.alert("error");
		}
	}
		
});