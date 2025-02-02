import React from 'react';
import { asciiAssets } from "../../assets/ascii-assets/ascii-assets.js";

function AsciiElement({ asset }) {
    return (
        <pre dangerouslySetInnerHTML={{ _html: asciiAssets[asset] }} />
    );
}