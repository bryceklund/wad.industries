import GlitchLogo from "./components/GlitchLogo";
import LoadingOverlay from "./components/LoadingOverlay";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <LoadingOverlay />
      <div className="monospace-content min-h-screen ext-white">
        <div className="max-w-[700px] mx-auto px-0 sm:px-4">
          {/* Header Section */}
          <header className="sm:space-y-4">
            <GlitchLogo
              className="transition-transform hover:scale-[1.02] mx-auto"
            />
            <Nav className="nav-list" />
          </header>

          {/* Main Content Section */}
          <main className="select-none mt-12 sm:mt-14 font-mono text-center">
            {/* Presentation Title */}
            <h2
              className="text-xl sm:text-2xl uppercase tracking-wider text-gray-400 glow"
              style={{ fontSize: 'var(--h2-size)' }}
            >
              WAD Industries Presents
            </h2>
            <h6 className="text-gray-600 glow"><span className="blur-[4px]">two </span>new songs<span className="blur-[4px]"> two</span></h6>

            {/* Title and Date */}

            <h1
              className="sm:mt-10 mt-4 text-8xl sm:text-8xl font-bold uppercase glow-glitch"
              style={{ fontSize: 'var(--h1-size)' }}
            >
              III
            </h1>
            <h3
              className="text-xl sm:text-2xl font-light text-gray-600"
              style={{ fontSize: 'var(--h3-size)' }}
            >
              February 21 2025
            </h3>

          </main>
        </div>
      </div>
    </>
  );
}

export default App;