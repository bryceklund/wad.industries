import React from 'react';

const NAV_LINKS = [
  ['spotify', 'https://open.spotify.com/artist/26Yk40A80aUvq6nKOvarHv'],
  ['bandcamp', 'https://wadindustries.bandcamp.com'],
  ['instagram', 'https://www.instagram.com/wadindustries'],
  ['twitter', 'https://twitter.com/wad_industries'],
  ['email', 'mailto:mail@wad.industries']
];

function Nav() {
  return (
    <nav className="flex flex-wrap justify-center gap-x-4 gap-y-4 w-full sm:gap-8 py-0 mt-6 font-mono">
      {NAV_LINKS.map(([name, url]) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-1000 hover:text-[#a374ff] transition-colors duration-300 tracking-wide no-underline leading-tight before:content-['\['] before:opacity-10 after:content-['\]'] after:opacity-10"
          style={{ fontSize: 'var(--nav-size)' }}
        >
          {name}
        </a>
      ))}
    </nav>
  );
}

export default Nav;