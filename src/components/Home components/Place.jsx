import afford from "../../img/affordable.jpg";
import security from "../../img/security.jpg";
import comfort from "../../img/comfort.jpg";
import serene from "../../img/serene.jpg";

function Place() {
  return (
    <div className="place">
      <p className="title">Hotelvivi is where you wanna be</p>

      <div className="reasons">
        <div className="afford">
          <div className="describe top-left">
            <p className="reasontitle">AFFORDABLE PRICES</p>
            <p className="about">
              We have a plan for everybody. Though most of our offers are
              expensive, we have less expensive offers too. Don't worry about
              cost if you have a low budget, we have you covered
            </p>
          </div>
          <img src={afford} alt="" />
        </div>
        <div className="serene">
          <img src={serene} alt="" />
          <div className="describe">
            <p className="reasontitle">SERENE ENVIRONMENT </p>
            <p className="about">
              When it comes to noise, we don't tolerate it. That's why we have
              an Anti-Noise policy. The Anti-Noise policy is one of our policies
              we hold in high esteem. Due to this, we always have a serene
              environment for your peace of mind.
            </p>
          </div>
        </div>
        <div className="comfort">
          <div className="describe">
            <p className="reasontitle">COMFORTABLE ROOMS</p>
            <p className="about">
              Transform your bedroom into a summertime paradise.
            </p>
          </div>
          <img src={comfort} alt="" />
        </div>
        <div className="security">
          <img src={security} alt="" />

          <div className="describe bottom-right">
            <p className="reasontitle">SECURITY GUARANTEED</p>
            <p className="about">
              At hotelvivi, we have well trained security personnels who keep us
              safe. We employed a lot of them so they work day and night to make
              sure the premises of Hotelvivi is safe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Place;
