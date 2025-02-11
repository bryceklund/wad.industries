// src/components/LogoOverlayGrid.jsx
import { GridAlignedOverlay } from './GridAlignedMedia';
import AsciiElement from '../src/components/AsciiElement';
import styles from '../styles/LogoOverlayGrid.module.css';
import logoGlow from '../assets/logo-glow.png';

function LogoOverlayGrid() {
  return (
    <div className={styles.container}>
      <GridAlignedOverlay
        imageSrc={logoGlow}
        imageAlt="Wad Industries Logo"
        className={styles.imageWrapper}
      >
        <AsciiElement 
          className={styles.asciiWrapper} 
          style={styles.asciiArt} 
          asset='wadIndustriesSimple' 
        />
      </GridAlignedOverlay>
    </div>
  );
}

export default LogoOverlayGrid;