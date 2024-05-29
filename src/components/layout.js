import React, { useState } from 'react';
import "./home.css";
import "./badriii.css";
import { Link } from "react-router-dom";

const Layout = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="rao rohit">
     <div>
      <img src="https://www.tourmyindia.com/chardham/chardham-images/logo.webp" alt="" className="logo" />
     </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`menubar ${menuActive ? 'active' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
        <ul>
          <li><Link to="/Badri">packages</Link></li>
        </ul>
        <ul>
          <li><Link to="https://en.wikipedia.org/wiki/Kedarnath_Temple" target="_blank" rel="noopener noreferrer">Kedarnath dham</Link></li>
        </ul>
        <ul>
          <li><Link to="https://en.wikipedia.org/wiki/Badrinath" target="_blank" rel="noopener noreferrer">badrinath dham</Link></li>
        </ul>
        <ul>
          <li><Link to="https://en.wikipedia.org/wiki/Gangotri" target="_blank" rel="noopener noreferrer">Gangotri</Link></li>
        </ul>
        <ul>
          <li><Link to="https://en.wikipedia.org/wiki/Yamunotri" target="_blank" rel="noopener noreferrer">Yamunotr</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
