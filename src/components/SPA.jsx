import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function SPA() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="spa">
      <div className="spa-hero">
        <div>
          <p className="spa-hero-head">Hotelvivi SPA</p>
          <p className="spa-hero-about">
            Hotelvivi SPA is where you come when you need to get away,
            de-stress, find balance and feel light. The spa's mission is to
            provide the best spa treatments in the world. With this principles,
            we hope to deliver the best service possible, every time. We look
            forward to providing you a first-class spa experience!
          </p>
          <a href=" ">Book Now</a>
        </div>
      </div>

      <div className="time-off">
        <p className="time-off-head" data-aos="fade-up">
          Take some time off, relax and have a good time.
        </p>
        <p className="time-off-about" data-aos="fade-up">
          At Hotelviv Spa, we believe in the image of beautification and
          guidance to fulfill your personal flare. Our goal is to offer
          tranquility where you can relax and feel confident that your best
          interest is in our hands. Our lives can be full of responsibilities
          and stressors that effect our moods, decreasing our energies and
          really draining are bodies. Here at Hotelvivi spa we have the perfect
          antidote to revive your spirit, renew your skin and regenerate that
          tired body. Come and experience the the most thrilling spa treatment
          at hotelvivi.
        </p>
        <a href="#spa-services" data-aos="fade-up">
          Our Services
        </a>
      </div>

      <div className="spa-services" id="spa-services">
        <p className="spa-services-head" data-aos="fade-up">
          SPA Services
        </p>
        <div className="all-spa-services">
          <div className="service" data-aos="zoom-in">
            <p className="each-service-head">Spa Brief</p>
            <div className="each-service-details">
              <p>Therapeutic Massage (30 mins)</p>
              <p>Express Facial</p>
              <p>Manicure & Pedicure</p>
            </div>
          </div>

          <div className="service" data-aos="zoom-in">
            <p className="each-service-head">Mini Beauty</p>
            <div className="each-service-details">
              <p>Therapeutic Massage (60 mins)</p>
              <p>Express Facial</p>
              <p>Manicure & Make My Day Pedicure</p>
            </div>
          </div>

          <div className="service" data-aos="zoom-in">
            <p className="each-service-head">European Beauty</p>
            <div className="each-service-details">
              <p>Deep Tissue Massage (30 mins)</p>
              <p>European Facial</p>
              <p>Manicure & More Than Regular Spa Pedicure</p>
            </div>
          </div>

          <div className="service" data-aos="zoom-in">
            <p className="each-service-head">Total Rejuvenation</p>
            <div className="each-service-details">
              <p>Deep Tissue Massage (30 mins)</p>
              <p>Four Layer Facial</p>
              <p>Manicure & Detoxify Me Green Tea Spa Pedicure</p>
            </div>
          </div>

          <div className="service" data-aos="zoom-in">
            <p className="each-service-head">Renaissance</p>
            <div className="each-service-details">
              <p>Therapeutic Massage (60 mins)</p>
              <p>Microdermabrasion & Special Mask (Four Layers)</p>
              <p>Manicure & Pedicure</p>
            </div>
          </div>

          <div className="service" data-aos="zoom-in">
            <p className="each-service-head">City Escape</p>
            <div className="each-service-details">
              <p>Deep Tissue Massage (60 min)</p>
              <p>Collagen 90-II or Hydro Lifting Facial</p>
              <p>Spa manicure & More Than Regular Spa Pedicure</p>
            </div>
          </div>

          <div className="service" data-aos="zoom-in">
            <p className="each-service-head">Belles Signature</p>
            <div className="each-service-details">
              <p>Deep Tissue Massage (60 mins)</p>
              <p>Microdermabrasion or Photo Facial & Eye Treatment</p>
              <p>Manicure & Say No To Dryness Paraffin Spa Pedicure</p>
            </div>
          </div>

          <div className="service" data-aos="zoom-in">
            <p className="each-service-head">Perfect Indulgence</p>
            <div className="each-service-details">
              <p>
                Thai Herbal Ball Massage or Belles Warm Stone Massage (60 mins)
              </p>
              <p>Microdermabrasion Facial & Special Mask (Collagen 90-II)</p>
              <p>Spa Manicure & OH!-RGANIC Spa Pedicure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SPA;
