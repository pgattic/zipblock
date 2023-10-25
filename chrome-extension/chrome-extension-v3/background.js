chrome.webRequest.onBeforeRequest.addListener(
	details => {
	  if (details.url.endsWith('.zip/')) {
		return {cancel: true};
	  }
	},
	{urls: ["http://*.zip/*", "https://*.zip/*"]},
	["blocking"]
  );