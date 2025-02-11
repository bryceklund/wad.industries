import React, { useState, useEffect, useCallback, useMemo } from 'react';
import AsciiElement from './AsciiElement';
import styles from '../styles/GlitchLogo.module.css';
import logoPng from '../assets/logo-glow.png';
import logoWebp from '../assets/logo-glow.webp';

const GlitchLogo = ({ className = '', ...props }) => {
    // Use ResizeObserver instead of window resize event
    const [dimensions, setDimensions] = useState({ width: 0, height: 0, scale: 1 });

    const containerRef = useCallback(node => {
        if (node !== null) {
            const observer = new ResizeObserver(entries => {
                const entry = entries[0];
                if (entry) {
                    const { width, height } = entry.contentRect;
                    // Only update if dimensions actually changed
                    setDimensions(prev => {
                        if (prev.width !== width || prev.height !== height) {
                            return { width, height, scale: width / 350 }; // 350 is base width
                        }
                        return prev;
                    });
                }
            });

            observer.observe(node);
            return () => observer.disconnect();
        }
    }, []);

    // Memoize the style object to prevent unnecessary recalculations
    const containerStyle = useMemo(() => ({
        '--logo-base-width': `${dimensions.width}px`,
        '--logo-base-height': `${dimensions.height}px`,
    }), [dimensions.width, dimensions.height]);

    // Use CSS will-change to optimize animations
    return (
        <div
            ref={containerRef}
            className={`select-none ${styles.container} ${className}`}
            style={containerStyle}
            {...props}
        >
            <div className={styles.wrapper}>
                <picture>
                    <source
                        type="image/webp"
                        srcSet={logoWebp}
                    />
                    <img
                        src={logoPng}
                        alt="Wad Industries Logo"
                        className={styles.logoImage}
                        loading="eager"
                        width={dimensions.width}
                        height={dimensions.height}
                    />
                </picture>
                <div className={styles.asciiWrapper}>
                    <AsciiElement
                        asset="wadIndustriesSimple"
                        style={styles.asciiArt}
                    />
                </div>
            </div>
        </div>
    );
};

export default React.memo(GlitchLogo);