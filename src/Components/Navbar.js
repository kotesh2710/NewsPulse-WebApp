import { Link, useLocation } from 'react-router-dom';
import React from 'react';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">NewsPulse</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/business' ? 'active' : ''}`}>
              <Link className="nav-link" to="/business">Business</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/entertainment' ? 'active' : ''}`}>
              <Link className="nav-link" to="/entertainment">Entertainment</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/health' ? 'active' : ''}`}>
              <Link className="nav-link" to="/health">Health</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/science' ? 'active' : ''}`}>
              <Link className="nav-link" to="/science">Science</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/sports' ? 'active' : ''}`}>
              <Link className="nav-link" to="/sports">Sports</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/technology' ? 'active' : ''}`}>
              <Link className="nav-link" to="/technology">Technology</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
