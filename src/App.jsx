import AsciiElement from './components/AsciiElement';
import Nav from './copmonents/Nav';
import CubeContainer from './components/CubeContainer';
import './styles/index.css';

function App() {
    return (
        <>
            <AsciiElement asset="wadIndusriesSimple" />
            <Nav />
            <CubeContainer />
            <p className="spotify-note">
                for spotify: this page and the Spotify profile are managed by Bryce Eklund,
                whose email address is bryce.eklund@gmail.com.
            </p>
        </>
    );
}

export default App;