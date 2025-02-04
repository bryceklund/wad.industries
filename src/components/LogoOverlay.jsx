import AsciiElement from './AsciiElement';
import styles from '/src/styles/LogoOverlay.module.css';

function LogoOverlay() {
    return (
        <div className={styles.container} >
            <div className={styles.imageWrapper} >
                <img className={styles.image} src='/src/assets/logo-glow.png' />
                <AsciiElement className={styles.asciiWrapper} style={styles.asciiArt} asset='wadIndustriesSimple' />
            </div>
        </div>
        
    );
}

export default LogoOverlay;

