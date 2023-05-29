import React, { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { TfiClose } from "react-icons/tfi";
function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav>
      <div className="navbar">
        <p> Hotelvivi</p>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/spa">SPA</a>
          </li>
          <li>
            <a href="/restaurant&bar">Restaurant & Bar</a>
          </li>
          <li>
            <a href="/offers">Offers</a>
          </li>
          <li>
            <a href="/rooms&suites">Rooms & Suites</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
        </ul>
        <div className="bar">
          {navOpen ? (
            <TfiClose
              color="white"
              size={30}
              onClick={(e) => {
                setNavOpen(!navOpen);
              }}
            />
          ) : (
            <HiBars3
              size={35}
              onClick={(e) => {
                setNavOpen(!navOpen);
              }}
            />
          )}
        </div>
      </div>
      <ul className={navOpen ? "mobile-nav" : ""}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/spa">SPA</a>
        </li>
        <li>
          <a href="/restaurant&bar">Restaurant & Bar</a>
        </li>
        <li>
          <a href="/offers">Offers</a>
        </li>
        <li>
          <a href="/rooms&suites">Rooms & Suites</a>
        </li>
        <li>
          <a href="/gallery">Gallery</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
