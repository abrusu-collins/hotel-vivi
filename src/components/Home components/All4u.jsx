import wedding from "../../img/wedding.jpg";
import bar from "../../img/bar.jpg";
import meeting from "../../img/meeting.jpg";
import accomodation from "../../img/accomodation.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function All4u() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="all4u">
      <p className="all4uheading" data-aos="fade-up">
        All for you
      </p>
      <div className="offers">
        <div className="accomodation" data-aos="fade-up">
          <img src={accomodation} alt="" />
          <p className="title">ACCOMODATION</p>
          <p className="about">
            Elegant and beautiful rooms with amenities such as TV, comfortable
            beds, nice bathrooms with premium bath products, Wi-Fi and a whole
            lot. Our Superior rooms are the natural choice for couples or
            business travelers.
          </p>
          <a href=" ">Read More</a>
        </div>
        <div className="bars" data-aos="fade-up">
          <img src={bar} alt="" />
          <p className="title">RESTAURANT AND BAR</p>
          <p className="about">
            Our restaurant and bar offers you with delicious and enjoyable foods
            and drinks that will do justice to your hunger. Enjoy Mediterranean
            flavors, charcuterie & cheese board, pizzas, burgers or local
            specialties on the grill.
          </p>
          <a href=" ">Read More</a>
        </div>
        <div className="weddings" data-aos="fade-up">
          <img src={wedding} alt="" />
          <p className="title">WEDDINGS</p>
          <p className="about">
            Love is a beautiful thing and we'll like to be there at this special
            moment of your life. We understand that every wedding is a new world
            to be discovered, and so it is our mission to ensure your special
            day is unforgettable.
          </p>
          <a href=" ">Read More</a>
        </div>
        <div className="meeting" data-aos="fade-up">
          <img src={meeting} alt="" />
          <p className="title">MEETINGS</p>
          <p className="about">
            We have sane and serene room spaces for your meetings. Our meeting
            spaces can accomodate up to 35 people. We delight you with tasteful
            breakfasts, themed coffee breaks, lunches, gala dinners and buffets.
          </p>
          <a href=" ">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default All4u;
