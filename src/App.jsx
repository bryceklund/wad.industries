import { useState } from 'react';
import { GridAlignedMedia, DebugGrid } from './components/GridAlignedMedia'
import AsciiElement from './components/AsciiElement';
import CubeContainer from './components/CubeContainer';
import Nav from './components/Nav';
import WadHeader from './components/WadHeader.jsx';
import LogoOverlay from './components/LogoOverlay.jsx';
import LogoOverlayGrid from './components/LogoOverlayGrid.jsx';
import LogoNavHeader from './components/LogoNavHeader.jsx';
import './styles/variables.css'
import IIIOverlay from './components/IIIOverlay.jsx';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='monospace-content'>
        <div className="min-h-screen">
        <LogoNavHeader />
        <p>
          <h2>WAD INDUSTRIES PRESENTS</h2><br /><br />
          <h1>III</h1>
          <h3>February 21 2025</h3>
        </p>
        
        

      </div>
    </div>
  )
}

export default App
