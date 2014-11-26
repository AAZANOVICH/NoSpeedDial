
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

    if(changeInfo.url == "http://nenkfddcinieejhaipddbmdpkhajbpff/chrome/downloads") {
        chrome.tabs.update(tabId, {'url': 'chrome://downloads'});
    }

     if(changeInfo.url == "http://nenkfddcinieejhaipddbmdpkhajbpff/chrome/bookmarks") {
        chrome.tabs.update(tabId, {'url': 'chrome://bookmarks'});
    }

    if(changeInfo.url == "http://nenkfddcinieejhaipddbmdpkhajbpff/chrome/history") {
        chrome.tabs.update(tabId, {'url': 'chrome://history'});
    }

    if(changeInfo.url == "http://nenkfddcinieejhaipddbmdpkhajbpff/chrome/extensions") {
        chrome.tabs.update(tabId, {'url': 'chrome://extensions'});
    }

    if(changeInfo.url == "http://nenkfddcinieejhaipddbmdpkhajbpff/chrome/apps") {
        chrome.tabs.update(tabId, {'url': 'chrome://apps'});
    }

    if(changeInfo.url == "http://nenkfddcinieejhaipddbmdpkhajbpff/chrome/settings") {
        chrome.tabs.update(tabId, {'url': 'chrome://settings'});
    }

});



