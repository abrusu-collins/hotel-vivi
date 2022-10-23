import restaurant_hero_img from "../img/restaurant_hero_img.webp";
// import hero_bg from "../img/pizza_.png";
function RestaurantBar() {
  return (
    <div className="restaurant_bar">
      <div className="restaurant_bar_hero">
        <p className="restaurant_bar_hero_title">Hotelvivi Restaurant & Bar</p>
        <img src={restaurant_hero_img} alt="" />
      </div>
      <p className="menu_head">Our Menu</p>

      <div className="the_menu">
        <div className="breakfast">
          <p className="each_menu_head">Breakfast</p>
          <div className="menu_list">
            <div className="food_price">
              <p className="food"> Fresh Orange Juice </p>
              <p className="price">£4.5</p>
            </div>
            <div className="food_price">
              <p className="food"> Virgin Mary </p>
              <p className="price">£4.5</p>
            </div>
            <div className="food_price">
              <p className="food"> Grapefruit Juice</p>
              <p className="price"> £3.5</p>
            </div>
            <div className="food_price">
              <p className="food"> Bucks Fizz </p>
              <p className="price">£11</p>
            </div>
            <div className="food_price">
              <p className="food"> Avocado, Lemon, Olive Oil </p>
              <p className="price">£5</p>
            </div>
            <div className="food_price">
              <p className="food"> Scrambled Egg & Spinach </p>
              <p className="price"> £8 </p>
            </div>
            <div className="food_price">
              <p className="food"> e Spiced Borlotti Beans </p>
              <p className="price">£21</p>
            </div>
            <div className="food_price">
              <p className="food"> Chesnut </p>
              <p className="price">£16</p>
            </div>
            <div className="food_price">
              <p className="food"> Chamomile Tea </p>
              <p className="price">£14.5</p>
            </div>
            <div className="food_price">
              <p className="food">Lemongrass & Ginger £3.5</p>
              <p className="price">£7.5</p>
            </div>
          </div>
        </div>
        <div className="lunch_dinner">
          <p className="each_menu_head">Lunch and Dinner</p>
        </div>
        <div className="drinks">
          <p className="each_menu_head"> Drinks List</p>
        </div>
      </div>
    </div>
  );
}

export default RestaurantBar;
