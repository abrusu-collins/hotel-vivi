import _4 from "../img/4.jpg";
import _5 from "../img/5.jpg";
import _10 from "../img/10.jpg";
import _12 from "../img/12.jpg";
import _13 from "../img/13.jpg";
import _14 from "../img/14.jpg";
import _15 from "../img/15.jpg";
import _16 from "../img/16.jpg";
import _17 from "../img/17.jpg";
import _18 from "../img/18.jpg";
import _19 from "../img/19.jpg";

function Gallery() {
  return (
    <div className="gallery">
      <p className="gallery-head">Gallery</p>

      <div className="grid">
        <div className="_15">
          <img src={_15} alt="" />
        </div>
        <div className="_16">
          <img src={_16} alt="" />
        </div>
        <div className="_18">
          <img src={_18} alt="" />
        </div>
        <div className="_5">
          <img src={_5} alt="" />
        </div>
        <div className="_14">
          <img src={_14} alt="" />
        </div>
        <div className="_13">
          <img src={_13} alt="" />
        </div>
        <div className="_17">
          <img src={_17} alt="" />
        </div>
        <div className="_10">
          <img src={_10} alt="" />
        </div>
        <div className="_19">
          <img src={_19} alt="" />
        </div>
        <div className="_4">
          <img src={_4} alt="" />
        </div>
        <div className="_12">
          <img src={_12} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
