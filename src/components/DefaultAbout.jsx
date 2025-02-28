import React from 'react';
import AlbumElement from './AlbumElement';
import yrJpg from '../assets/youre-ready-art.jpg';
import yrWebp from '../assets/youre-ready-art.webp';
import iiiJpg from '../assets/iii-art.jpg';
import iiiWebp from '../assets/iii-art.webp';

// Band Header component with inline formatting
const DefaultAbout = () => {
    return (
        <div className="flex flex-col items-center text-center">
            {/* First line: "WAD is a BAND" */}
            <div className="flex items-center flex-wrap justify-center">
                <span
                    className="text-xl sm:text-2xl uppercase tracking-wider text-gray-400 glow inline-block"
                    style={{ fontSize: 'var(--h2-size)' }}
                >
                    WAD
                </span>
                <span className="text-gray-600 mx-2">is a</span>
                <span
                    className="text-xl sm:text-2xl uppercase tracking-wider text-gray-400 glow inline-block"
                    style={{ fontSize: 'var(--h2-size)' }}
                >
                    BAND
                </span>
            </div>

            {/* Second line: "from Portland, OR" */}
            <div className="">
                <span className="text-sm text-gray-600">from Portland, OR</span>
            </div>
            {/* III */}
            <AlbumElement albumArt={iiiJpg} albumWebp={iiiWebp} albumUrl="https://distrokid.com/hyperfollow/wad9/iii" albumName="III" />
            {/* You're Ready */}
            <AlbumElement albumArt={yrJpg} albumWebp={yrWebp} albumUrl="https://distrokid.com/hyperfollow/wad9/youre-ready" albumName="You're Ready" />
        </div>
    );
};

export default DefaultAbout;