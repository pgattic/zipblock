chrome.webNavigation.onBeforeNavigate.addListener(details => {
	if (details.url.endsWith('.zip/')) {
	  chrome.tabs.update(details.tabId, {url: 'popup.html'});
	}
  }, {url: [{schemes: ['http', 'https'], hostSuffix: '.zip'}]});
  