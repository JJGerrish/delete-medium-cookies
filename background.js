function clearCookies(tab) {
    
    chrome.cookies.getAll({domain: "medium.com"}, function(cookies) {
        
        for(var i=0; i<cookies.length;i++) {
            
            chrome.cookies.remove({url: "https://medium.com" + cookies[i].path, name: cookies[i].name}, function(){
                
                chrome.tabs.reload(tab.id);
            });
        }
    });
}

chrome.browserAction.onClicked.addListener(clearCookies);