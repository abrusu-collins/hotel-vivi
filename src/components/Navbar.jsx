import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="navbar" id="home">
      <p>HotelVivi</p>
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
      <div
        className="bar"
        onClick={(e) => {
          e.currentTarget.parentElement.children[1].classList.toggle(
            "navremoval"
          );
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
}

export default Navbar;
