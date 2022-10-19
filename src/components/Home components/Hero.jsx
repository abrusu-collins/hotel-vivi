import vid from "../../video/vid.mp4";

function Hero() {
  return (
    <div className="hero">
      <video
        id="background-video"
        autoPlay
        loop
        muted
        poster="../img/banner.jpg"
      >
        <source src={vid} type="video/mp4"></source>
      </video>
      <div className="text">
        <p className="welcome">Welcome to Hotelvivi</p>
        <p className="home">Your home away from home</p>
        <a href=" ">Book A Room</a>
      </div>
    </div>
  );
}

export default Hero;
