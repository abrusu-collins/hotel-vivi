import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="navbar" id="home">
      <p>HotelVivi</p>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#tvinw">Rooms & Suites</a>
        </li>
        <li>
          <a href="#fans">Photos & Videos</a>
        </li>
        <li>
          <a href="#pics">Offers</a>
        </li>
        <li>
          <a href="#pics">SPA</a>
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
