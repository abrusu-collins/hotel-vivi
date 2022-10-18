import fredrica from "../img/fredrica.jfif";
import mark from "../img/mark.jfif";
import farhan from "../img/farhan.jfif";


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Reviews() {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className="reviews">
      <p className="reviewsheading" data-aos="fade-up">Guest Reviews</p>
      <div className="flex-2">
        <div data-aos="fade-up">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus obcaecati minima debitis placeat amet. Adipisci sit
            velit aliquam accusamus vero reprehenderit excepturi enim optio ad
            ex, rem in provident quas.
          </p>
          <p className="name">Fredrica Arthur</p>
          <img src={fredrica} alt="fredrica" />
        </div>
        <div data-aos="fade-up">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus obcaecati minima debitis placeat amet. Adipisci sit
            velit aliquam accusamus vero reprehenderit excepturi enim optio ad
            ex, rem in provident quas.
          </p>
          <p className="name">Mark Owusu</p>
          <img src={mark} alt="mark" />
        </div>
      </div>
      <div className="flex-1" data-aos="fade-up">
        
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          obcaecati minima debitis placeat amet. Adipisci sit velit aliquam
          accusamus vero reprehenderit excepturi enim optio ad ex, rem in
          provident quas.
        </p>
        <div className="profile">
          <p className="name">Farhan Yahaya</p>
          <img src={farhan} alt="farhan" />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
