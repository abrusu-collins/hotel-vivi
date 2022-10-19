import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import _1 from "../../img/1.jpg";
import _2 from "../../img/2.jpg";
import _3 from "../../img/3.jpg";
import _4 from "../../img/4.jpg";
import _5 from "../../img/5.jpg";
import _6 from "../../img/6.jpg";
import _7 from "../../img/7.jpg";
import _8 from "../../img/8.jpg";
import _9 from "../../img/9.jpg";
import _10 from "../../img/10.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Luxury() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="luxury">
      <p className="luxuryheading" data-aos="fade-up">
        At Hotelvivi, Luxury is our Love Language
      </p>
      <div className="carousel" data-aos="fade-up">
        <Carousel>
          <div>
            <img src={_1} alt="pic" />
          </div>
          <div>
            <img src={_2} alt="pic" />
          </div>
          <div>
            <img src={_3} alt="pic" />
          </div>
          <div>
            <img src={_4} alt="pic" />
          </div>
          <div>
            <img src={_5} alt="pic" />
          </div>
          <div>
            <img src={_6} alt="pic" />
          </div>
          <div>
            <img src={_7} alt="pic" />
          </div>
          <div>
            <img src={_8} alt="pic" />
          </div>
          <div>
            <img src={_9} alt="pic" />
          </div>
          <div>
            <img src={_10} alt="pic" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Luxury;
