// src/components/LogoOverlayGrid.jsx
import { GridAlignedOverlay } from './GridAlignedMedia';
import AsciiElement from './AsciiElement';
import styles from '/src/styles/LogoOverlay.module.css';

function LogoOverlayGrid() {
  return (
    <div className={styles.container}>
      <GridAlignedOverlay
        imageSrc="/src/assets/logo-glow.png"
        imageAlt="WAD Industries Logo"
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