import React, { useState, useRef, useEffect } from 'react';

const OptimizedImage = ({
    src,
    alt,
    caption,
    width,
    maxWidth,
    minWidth,
    align = 'center',
    aspectRatio = 'auto'
}) => {
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    const imgRef = useRef(null);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageSize({ width: img.naturalWidth, height: img.naturalHeight });
        };
        img.src = src;
    }, [src]);

    // resizing logic
    const getOptimalSize = () => {
        if (width || maxWidth || minWidth) {
            // If manual sizing is provided, use it
            return {
                width: width || '100%',
                maxWidth: maxWidth || '100%',
                minWidth: minWidth || 'auto'
            };
        }

        // Auto-sizing logic based on both width and height dimensions
        const { width: naturalWidth, height: naturalHeight } = imageSize;

        if (naturalWidth === 0 || naturalHeight === 0) {
            // Image not loaded yet, use default
            return { width: '100%', maxWidth: '600px' };
        }

        // Calculate aspect ratio
        const aspectRatio = naturalWidth / naturalHeight;

        // Define maximum display dimensions for optimal readability
        const MAX_DISPLAY_WIDTH = 600;
        const MAX_DISPLAY_HEIGHT = 400;

        // Calculate optimal size based on both dimensions
        let optimalWidth = naturalWidth;
        let optimalHeight = naturalHeight;

        // If image is too wide, scale down based on width
        if (naturalWidth > MAX_DISPLAY_WIDTH) {
            optimalWidth = MAX_DISPLAY_WIDTH;
            optimalHeight = optimalWidth / aspectRatio;
        }

        // If height is still too tall after width scaling, scale down based on height
        if (optimalHeight > MAX_DISPLAY_HEIGHT) {
            optimalHeight = MAX_DISPLAY_HEIGHT;
            optimalWidth = optimalHeight * aspectRatio;
        }

        // For very small images, don't upscale beyond natural size
        if (naturalWidth < 200 && naturalHeight < 200) {
            optimalWidth = naturalWidth;
            optimalHeight = naturalHeight;
        }

        const optimalMaxWidth = `${Math.round(optimalWidth)}px`;

        return {
            width: '100%',
            maxWidth: optimalMaxWidth,
            minWidth: 'auto'
        };
    };

    const { width: computedWidth, maxWidth: computedMaxWidth, minWidth: computedMinWidth } = getOptimalSize();

    const imageStyle = {
        width: computedWidth,
        maxWidth: computedMaxWidth,
        minWidth: computedMinWidth,
        height: 'auto',
        aspectRatio,
        display: 'block',
        margin: align === 'center' ? '0 auto' : align === 'left' ? '0 auto 0 0' : '0 0 0 auto',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        borderRadius: '4px'
    };

    const figureStyle = {
        textAlign: align,
        margin: '1.5rem 0',
        maxWidth: '100%'
    };

    return (
        <figure style={figureStyle}>
            <img
                ref={imgRef}
                src={src}
                alt={alt}
                style={imageStyle}
                className="optimized-image"
                loading="lazy"
            />
            {caption && (
                <figcaption style={{
                    fontStyle: 'italic',
                    fontSize: '0.9em',
                    marginTop: '0.75rem',
                    padding: '0 1rem',
                    color: 'var(--ifm-color-emphasis-600)',
                    textAlign: 'center',
                    lineHeight: '1.4'
                }}>
                    {caption}
                </figcaption>
            )}
        </figure>
    );
};

export default OptimizedImage;