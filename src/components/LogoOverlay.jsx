import AsciiElement from './AsciiElement';
import styles from '/src/styles/LogoOverlay.module.css';

function LogoOverlay() {
    return (
        <div className={styles.container} >
        <img src='/src/assets/logo-glow.png' />
            <AsciiElement style={styles} asset='wadIndustriesSimple' />
        </div>
        
    );
}

export default LogoOverlay;

