import romancemain from "../../img/romance-main.jpg";
function Romantic() {
  return (
    <div className="romantic">
      <div className="romantic-inner">
        <img src={romancemain} alt="" />
        <div className="right">
          <p className="romance-main-head">ROMANTIC OFFER</p>
          <p className="about-offer">
            Love is a beautiful thing and we want to play a part in your love
            story. Book one of our special offers and enjoy a truly luxurious
            break the next time you stay with us. One of the most treasured
            gifts amongst couples is time well spent together. At Hotelvivi, we
            will do everything in our power to make your dreams come true!
          </p>
          <a href=" ">Get Offer</a>
        </div>
      </div>
    </div>
  );
}

export default Romantic;
