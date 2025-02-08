import React from 'react';
import styles from '../styles/Nav.module.css';

function Nav() {
    return (
        <nav className={styles.nav}>
        <a target="_blank"
          href="https://open.spotify.com/artist/26Yk40A80aUvq6nKOvarHv?si=jXSAvTMxThK1LwmwgHaV1w">spotify</a><br/>
        <a target="_blank" href="https://wadindustries.bandcamp.com/">bandcamp</a><br/>
        <a target="_blank" href="https://www.instagram.com/wadindustries/">instagram</a><br/>
        <a target="_blank" href="https://twitter.com/wad_industries">twitter</a><br/>
        <a target="_blank" href="mailto:mail@wad.industries">email</a><br/>
      </nav>
    );    
}

export default Nav;