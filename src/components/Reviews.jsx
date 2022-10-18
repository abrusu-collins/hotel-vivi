import fredrica from "../img/fredrica.jfif";
import mark from "../img/mark.jfif";
import farhan from "../img/farhan.jfif";


function Reviews() {
  return (
    <div className="reviews">
      <p className="reviewsheading">Guest Reviews</p>
      <div className="flex-2">
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus obcaecati minima debitis placeat amet. Adipisci sit
            velit aliquam accusamus vero reprehenderit excepturi enim optio ad
            ex, rem in provident quas.
          </p>
          <p className="name">Fredrica Arthur</p>
          <img src={fredrica} alt="fredrica" />
        </div>
        <div>
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
      <div className="flex-1">
        
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
