import AsciiElement from '../src/components/AsciiElement';
import styles from '/src/styles/IIIOverlay.module.css';

function IIIOverlay() {
    return (
        <div className={styles.container} >
        <img src='/src/assets/iii-icon.png' />
            <AsciiElement style={styles.asciiArt} asset='iii' />
        </div>
        
    );
}

export default IIIOverlay;

