import React from 'react';
import { asciiAssets } from "../assets/ascii.js";

function AsciiElement({ asset, style }) {

    if (!asciiAssets[asset]) {
        console.error(`ASCII art "${asset}" not found`);
        return <pre>ASCII art no found</pre>
    }
    console.log(`Asset name: ${asset}`);
    return (
        <pre className={style}>{asciiAssets[asset]}</pre>
    );
}

export default AsciiElement;