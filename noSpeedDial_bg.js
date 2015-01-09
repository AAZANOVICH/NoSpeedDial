

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.update(tabs[0].id, {'url': 'chrome://' + request.action});
        });
});





