import React from 'react';
import styles from '../styles/AlbumElement.module.css';

const AlbumElement = ({ albumArt, albumWebp, albumUrl, albumName }) => {
    return (
        <div className={`mt-7 ${styles.albumContainer}`}>
            <a href={albumUrl} target="_blank">
                <div className={styles.albumName}>{albumName}</div>
                <picture className={styles.albumPicture}>
                    <source type="image/webp" srcSet={albumWebp} rel="noopener noreferrer" className={styles.albumLink} />
                    <img
                        src={albumArt}
                        alt={albumName}
                        loading="lazy"
                        className={styles.albumImage}
                    />
                </picture>
            </a>
        </div>
    );
};

export default AlbumElement;