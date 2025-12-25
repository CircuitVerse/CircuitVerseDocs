/**
 * Lazy load images for better performance
 * This script ensures images load only when visible
 */
(function() {
	'use strict';
	
	// Ensure all images have lazy loading enabled
	document.querySelectorAll('img:not([loading])').forEach(img => {
		img.setAttribute('loading', 'lazy');
	});
})();