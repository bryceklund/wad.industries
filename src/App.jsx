import GlitchLogo from "./components/GlitchLogo";
import LoadingOverlay from "./components/LoadingOverlay";
import DefaultAbout from "./components/DefaultAbout";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <LoadingOverlay />
      <div className="monospace-content min-h-screen ext-white">
        <div className="max-w-[700px] mx-auto px-0 sm:px-4">
          {/* Header Section */}
          <header className="sm:space-y-4">
            <a href="https://wad.industries/">
              <GlitchLogo
                className="transition-transform hover:scale-[1.02] mx-auto"
              />
            </a>
            <Nav className="nav-list" />
          </header>

          {/* Main Content Section */}
          <main className="select-none mt-5 sm:mt-14 font-mono text-center">
            <DefaultAbout />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
