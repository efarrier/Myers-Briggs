import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div id="header">
      <h1 id="logo">What's your Myers Briggs Personality Type?</h1>
      <nav>
        <div>
          <Link className="nav-link" to="/home">Take the Test</Link>
          <Link className="nav-link" to="/personality_types">Personality Types</Link>
          <Link className="nav-link" to="/results">Results</Link>
        </div>
      </nav>
      <div id="line-break" />
    </div>
  )
}

export default Header;
