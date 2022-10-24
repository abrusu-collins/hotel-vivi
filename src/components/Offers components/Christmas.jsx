import christmasmain from "../../img/christmas-main.jpg";

function Christmas() {
  return (
    <div className="romantic">
      <div className="romantic-inner">
        <img src={christmasmain} alt="" />
        <div className="right">
          <p className="romance-main-head">CHRISTMAS OFFER</p>
          <p className="about-offer">
            When we remember a special Christmas, it is not the presents that
            made it special, but the laughter, the feeling of love, and the
            togetherness of friends and family that made that Christmas special.
            That's why we created this offer for families to come together and
            have a great and memorable time during the festive season.
          </p>
          <a href="mailto:snillochemingson@gmail.com">Get Offer</a>
        </div>
      </div>
    </div>
  );
}

export default Christmas;
