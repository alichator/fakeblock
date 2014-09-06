chrome.webNavigation.onDOMContentLoaded.addListener(function(e) {
        num = 1;
        console.log(num);
        num += 1
}, {url: [{hostSuffix: 'facebook.com'}]});
