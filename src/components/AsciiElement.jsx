import React from 'react';
import { asciiAssets } from "../../assets/ascii-assets/ascii-assets.js";

function AsciiElement({ asset }) {
    
    if (!asciiAssets[asset]) {
        console.error(`ASCII art "${asset}" not found`);
        return <pre>ASCII art no found</pre>
    }
    console.log(`Asset name: ${asset}`);
    return (
        <pre>{asciiAssets[asset]}</pre>
    );
}

export default AsciiElement;