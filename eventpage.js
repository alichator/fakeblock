var container = [];

chrome.extension.onMessage.addListener ( function(request, sender, message){
	if request.filter === "filter"){
        chrome.storage.sync.get("keys", function(a){
	for(var i=0; i<a.keys.length; i++){
	    if(a.keys[i].check == "t"){
		container.push(a.keys[i].key);
	     }
	}
   });
   console.log(container)

   }, {url: [{hostSuffix: 'twitter.com'}]});
    }
})