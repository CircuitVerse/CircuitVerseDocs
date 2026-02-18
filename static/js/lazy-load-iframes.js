/**
 * Lazy load images and iframes for better performance
 * This script ensures media loads only when visible
 */
(function() {
	'use strict';
	
	// Ensure all images have lazy loading enabled
	document.querySelectorAll('img:not([loading])').forEach(img => {
		img.setAttribute('loading', 'lazy');
	});
	
	// Ensure all iframes have lazy loading enabled
	document.querySelectorAll('iframe:not([loading])').forEach(iframe => {
		iframe.setAttribute('loading', 'lazy');
	});
})();