import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return <nav class="navbar navbar-light bg-light">
    <div class="page-center">
      <Link to="/"><img alt="Financial Phoenix Logo" class="logo" src="Financial%20Phoenix-03.svg" width="350"></img></Link>
      <ul>
        <li>
          <Link to="/basics">Basics</Link>
        </li>
        <li>
          <Link class="btn btn-secondary" to="/quiz">Find Your Path Forward</Link>
        </li>
      </ul>
    </div>
  </nav>
}

export default Navbar;
