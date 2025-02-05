import React, { useState, useEffect } from 'react';

function LoadingOverlay() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            // Add a small delay to ensure smooth transition
            setTimeout(() => setIsVisible(false), 100);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 z-50 transition-opacity duration-500"
            style={{
                backgroundColor: '#1b1a1a',
                opacity: isVisible ? '1' : '0',
            }}
        />
    );
}

export default LoadingOverlay;