chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log("The color is green.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'developer.chrome.com'},
            })
            ],
                actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
        });
});

const tuturu = new Audio();
tuturu.src = chrome.extension.getURL("./tuturu.mp3");
tuturu.play();
// function myAlert(){
//     alert('hello world');
// }

// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('search').addEventListener('submit', myAlert);
// });