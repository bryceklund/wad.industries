import React from 'react';
import AsciiElement from './AsciiElement';
import Nav from './Nav';

const WadHeader = () => {
  return (
    <div className="relative w-full min-h-screen bg-black flex flex-col items-center">
      {/* Title */}
      <div className="text-white mt-16 mb-8">
        <span className="block text-xl">WAD INDUSTRIES</span>
        {/* <span className="block text-xl">PRESENTS NEW CONTENT</span> */}
      </div>

      {/* Grid overlay container */}
      <div className="grid w-64 h-64 mb-12">
        <img
          src="/src/assets/wadcube.blend.v3.gif"
          alt="WAD Cube"
          className="col-start-1 row-start-1 w-full h-full object-contain"
        />
        <div className="col-start-1 row-start-1 flex items-center justify-center text-gray-600">
          <AsciiElement asset="iii" />
        </div>
      </div>

      {/* Navigation */}
      <Nav />
    </div>
  );
};

export default WadHeader;