import afford from "../img/affordable.jpg";
import security from "../img/security.jpg";
import comfort from "../img/comfort.jpg";
import serene from "../img/serene.jpg";

function Place() {
  return (
    <div className="place">
      <p className="title">Hotelvivi is where you wanna be</p>

      <div className="reasons">
        <div className="afford">
          <div className="describe">
            <p className="title">AFFORDABLE PRICES</p>
            <p className="about">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
              asperiores sed enim ab natus aut beatae id deleniti itaque, earum
              in corrupti provident sunt ut suscipit architecto consequuntur
              facere repudiandae.
            </p>
          </div>
          <img src="" alt="" />
        </div>
        <div className="serene">
          <div className="describe">
            <p className="title">COMFORTABLE ROOMS</p>
            <p className="about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              ipsum voluptates, eius totam laboriosam eaque nam dolor tenetur
              facere voluptatibus, corrupti esse impedit nihil nesciunt cum.
              Expedita incidunt nam quam.
            </p>
          </div>
          <img src="" alt="" />
        </div>
        <div className="comfort">
          <div className="describe">
            <p className="title">SERENE ENVIRONMENT</p>
            <p className="about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              dolorem aperiam cumque totam hic, sint accusamus necessitatibus,
              dolorum sapiente omnis deleniti facilis similique delectus. Autem,
              tempora soluta. Dolorum, aliquam excepturi.
            </p>
          </div>
          <img src="" alt="" />
        </div>
        <div className="security">
          <div className="describe">
            <p className="title">SECURITY GUARANTEED</p>
            <p className="about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              eaque suscipit possimus magni blanditiis similique dolorum neque
              voluptatum impedit alias, odit iusto quo architecto numquam eum
              ducimus fuga. Id, cumque.
            </p>
          </div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Place;
