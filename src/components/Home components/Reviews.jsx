import fredrica from "../../img/fredrica.jfif";
import mark from "../../img/mark.jfif";
import farhan from "../../img/farhan.jfif";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Reviews() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="reviews" id="reviews">
      <p className="reviewsheading" data-aos="fade-up">
        Guest Reviews
      </p>
      <div className="flex-2">
        <div data-aos="fade-up">
          <p>
        

            The windows are large and the bed is really comfortable. The bathroom
          is equipped with everything you need and clean & modern really makes
          me happy. There was water in the room which is so helpful after a long
          day.
          </p>
          <p className="name">Fredrica Arthur</p>
          <img src={fredrica} alt="fredrica" />
        </div>
        <div data-aos="fade-up">
          <p>
            Absolutely astounding service from the front desk, security,
            bellman, upstairs restaurant, and pool. Neat common spaces and I can
            tell the rooms had been cleaned with extra care.
          </p>
          <p className="name">Mark Owusu</p>
          <img src={mark} alt="mark" />
        </div>
      </div>
      <div className="flex-1" data-aos="fade-up">
        <p>
        The Beds are very comfortable. Quiet location made our stay
            enjoyable and our room faced another building. Friendly and
            accommodating staff! Cleanliness was a top priority here. Breakfast
            was filling, everyone was so nice and aware of those around them in
            trying to make sure the guests had a pleasant experience.
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
