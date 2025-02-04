import React from 'react';
import AsciiElement from './AsciiElement';
import styles from '../styles/GlitchLogo.module.css';
import logoGlow from '../assets/logo-glow.png';

const GlitchLogo = ({ className = '', ...props }) => {
    // Get the natural dimensions of the logo image for proper scaling
    const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

    React.useEffect(() => {
        const logoImage = new Image();
        logoImage.src = logoGlow;
        logoImage.onload = () => {
            setDimensions({
                width: logoImage.naturalWidth,
                height: logoImage.naturalHeight
            });
        };
    }, []);

    return (
        <div
            className={`${styles.container} ${className}`}
            style={{
                // '--logo-scale': scale,
                '--logo-base-width': `${dimensions.width}px`,
                '--logo-base-height': `${dimensions.height}px`, // do this math in useEffect instead?
            }}
            {...props} // why?
        >
            <div className={styles.wrapper}>
                <img
                    src={logoGlow}
                    alt="Wad Industries Logo"
                    className={styles.logoImage}
                />
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

export default GlitchLogo;