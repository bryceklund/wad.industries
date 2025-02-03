import { useState } from 'react'
import AsciiElement from './components/AsciiElement';
import CubeContainer from './components/CubeContainer';
import Nav from './components/Nav';
import WadHeader from './components/WadHeader.jsx';
import LogoOverlay from './components/LogoOverlay.jsx';
import IIIOverlay from './components/IIIOverlay.jsx';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LogoOverlay />
    <IIIOverlay />
    {/* <Nav /> */}
    
    {/* <IIIOverlay /> */}
      {/* <AsciiElement asset="wadIndustriesSimple" />
    <Nav />  
      <CubeContainer />
      <AsciiElement asset="iii" /> */}
      
    </>
  )
}

export default App
