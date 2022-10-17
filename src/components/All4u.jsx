import wedding from "../img/wedding.jpg";
import bar from "../img/bar.jpg";
import meeting from "../img/meeting.jpg";
import accomodation from "../img/accomodation.jpg";

function All4u() {
  return (
    <div className="all4u">
      <p className="all4uheading">All for you</p>
      <div className="offers">
        <div className="accomodation">
          <img src={accomodation} alt="" />
          <p className="title">ACCOMODATION</p>
          <p className="about">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
            reprehenderit magni placeat molestiae laborum rem unde excepturi
            perferendis sit qui sapiente eligendi culpa neque, nesciunt eos
            voluptas incidunt dolore. Rem.
          </p>
          <a href=" ">Read More</a>
        </div>
        <div className="bars">
          <img src={bar} alt="" />
          <p className="title">RESTAURANT AND BAR</p>
          <p className="about">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
            reprehenderit magni placeat molestiae laborum rem unde excepturi
            perferendis sit qui sapiente eligendi culpa neque, nesciunt eos
            voluptas incidunt dolore. Rem.
          </p>
          <a href=" ">Read More</a>
        </div>
        <div className="weddings">
          <img src={wedding} alt="" />
          <p className="title">WEDDINGS</p>
          <p className="about">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
            reprehenderit magni placeat molestiae laborum rem unde excepturi
            perferendis sit qui sapiente eligendi culpa neque, nesciunt eos
            voluptas incidunt dolore. Rem.
          </p>
          <a href=" ">Read More</a>
        </div>
        <div className="meeting">
          <img src={meeting} alt="" />
          <p className="title">MEETINGS</p>
          <p className="about">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
            reprehenderit magni placeat molestiae laborum rem unde excepturi
            perferendis sit qui sapiente eligendi culpa neque, nesciunt eos
            voluptas incidunt dolore. Rem.
          </p>
          <a href=" ">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default All4u;