chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
	  if (details.url.endsWith('.zip/')) {
		return {cancel: true};
	  }
	},
	{urls: ["<all_urls>"]},
	["blocking"]
  );