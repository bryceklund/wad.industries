import React from 'react';
import AsciiElement from './AsciiElement';
import styles from '../styles/LogoNavHeader.module.css';
import logoGlow from '../assets/logo-glow.png';


const LogoNavHeader = () => {
  return (
    <header className={styles.header}>
      {/* Logo Container */}
      <div className={styles.logoContainer}>
        {/* Background Image */}
        <img
          src={logoGlow}
          alt="Wad Industries Logo"
          className={styles.logoImage}
        />

        {/* ASCII Overlay */}
        <div className={styles.asciiWrapper}>
          <AsciiElement
            style={styles.asciiArt}
            asset="wadIndustriesSimple"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex justify-center gap-8 mt-6 font-mono">
        {[
          ['spotify', 'https://open.spotify.com/artist/26Yk40A80aUvq6nKOvarHv'],
          ['bandcamp', 'https://wadindustries.bandcamp.com'],
          ['instagram', 'https://www.instagram.com/wadindustries'],
          ['twitter', 'https://twitter.com/wad_industries'],
          ['email', 'mailto:mail@wad.industries']
        ].map(([name, url]) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-[#a374ff] transition-colors"
          >
            {name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default LogoNavHeader;