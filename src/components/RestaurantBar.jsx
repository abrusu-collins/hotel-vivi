import restaurant_hero_img from "../img/restaurant_hero_img.webp";
import menu_bg from "../img/menu_bg.png";
function RestaurantBar() {
  return (
    <div className="restaurant_bar">
      <div className="restaurant_bar_hero">
        <p className="restaurant_bar_hero_title">Hotelvivi Restaurant & Bar</p>
        <img src={restaurant_hero_img} alt="" />
      </div>
     <p className="menu_head">
        Our Menu
     </p>
    </div>
  );
}

export default RestaurantBar;
