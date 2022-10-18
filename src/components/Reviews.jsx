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
          <p className="name">Abrusu Collins</p>
          <img src={fredrica} alt="fredrica" />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus obcaecati minima debitis placeat amet. Adipisci sit
            velit aliquam accusamus vero reprehenderit excepturi enim optio ad
            ex, rem in provident quas.
          </p>
          <p className="name">Abrusu Collins</p>
          <img src={mark} alt="mark" />
        </div>
      </div>
      <div className="flex-1">
        <div >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          obcaecati minima debitis placeat amet. Adipisci sit velit aliquam
          accusamus vero reprehenderit excepturi enim optio ad ex, rem in
          provident quas.
        </p>
        <div className="profile">
          <p className="name">Abrusu Collins</p>
          <img src={farhan} alt="farhan" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
