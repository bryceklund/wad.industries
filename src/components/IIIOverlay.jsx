import AsciiElement from './AsciiElement';
import styles from '../styles/IIIOverlay.module.css';

function IIIOverlay() {
    return (
        <div className={styles.container} >
        <img src='/src/assets/iii-icon.png' />
            <AsciiElement style={styles} asset='iii' />
        </div>
        
    );
}

export default IIIOverlay;

