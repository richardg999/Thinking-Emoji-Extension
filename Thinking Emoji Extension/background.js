'use strict';

// injects copyToClipboard script upon click
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    file: "copyToClipboard.js"
  });
});