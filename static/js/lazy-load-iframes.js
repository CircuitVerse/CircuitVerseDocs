/**
 * Lazy load iframes for better performance
 * This script ensures all iframes (especially CircuitVerse embeds) load only when visible
 */
(function() {
	'use strict';
	
	// Use Intersection Observer for better performance
	if ('IntersectionObserver' in window) {
		const iframeObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const iframe = entry.target;
					
					// Only load if not already loaded
					if (!iframe.dataset.loaded && iframe.dataset.src) {
						iframe.src = iframe.dataset.src;
						iframe.dataset.loaded = 'true';
						observer.unobserve(iframe);
					}
				}
			});
		}, {
			// Start loading when iframe is 200px away from viewport
			rootMargin: '200px'
		});
		
		// Find all iframes without lazy loading attribute
		document.querySelectorAll('iframe:not([loading="lazy"])').forEach(iframe => {
			// Store original src
			if (iframe.src && !iframe.dataset.src) {
				iframe.dataset.src = iframe.src;
				iframe.removeAttribute('src');
				iframe.style.backgroundColor = '#f0f0f0';
				iframe.style.minHeight = iframe.height || '200px';
				iframeObserver.observe(iframe);
			}
		});
	} else {
		// Fallback for older browsers - add loading="lazy" attribute
		document.querySelectorAll('iframe:not([loading])').forEach(iframe => {
			iframe.setAttribute('loading', 'lazy');
		});
	}
	
	// Also ensure images have lazy loading
	document.querySelectorAll('img:not([loading])').forEach(img => {
		img.setAttribute('loading', 'lazy');
	});
})();

