import GlitchLogo from "./components/GlitchLogo";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="monospace-content min-h-screen ext-white">
      <div className="max-w-[700px] mx-auto px-0 sm:px-4">
        {/* Header Section */}
        <header className="sm:space-y-4 sm:space-x-1">
          <GlitchLogo
            className="transition-transform hover:scale-[1.02] mx-auto"
          />
          <Nav className="nav-list" />
        </header>

        {/* Main Content Section */}
        <main className="mt-16 sm:mt-16 space-y-8 font-mono text-center">
          {/* Presentation Title */}
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl uppercase tracking-wider text-gray-400" style={{ fontSize: 'var(--h2-size)' }}>
              WAD Industries Presents
            </h2>
          </div>

          {/* Title and Date */}
          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl font-bold uppercase glow-text" style={{ fontSize: 'var(--h1-size)' }}>
              III
            </h1>
            <h3 className="sm:space-y-6 text-xl sm:text-2xl font-light text-gray-300" style={{ fontSize: 'var(--h3-size)' }}>
              February 21 2025
            </h3>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;