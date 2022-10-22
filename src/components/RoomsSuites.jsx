import _1 from "../img/1.jpg";
import _2 from "../img/2.jpg";
import _3 from "../img/3.jpg";
import _7 from "../img/7.jpg";
import _9 from "../img/9.jpg";
import _11 from "../img/11.jpg";
import _banner from "../img/banner.jpg";









function RoomsSuites() {
    return (
        <div className="rooms_suites">
          <p className="rooms_suiteshead">
            Rooms & Suites
          </p>
          <div className="therooms">
            <div className="room1">
              <img src={_1} alt="" />
              <div className="details">
                <ul>
                  <li>350-425 square feet</li>
                  <li>Complimentary Wi-Fi</li>
                  <li>Flat-screen TV</li>
                  <li>iHome® alarm clock with Bluetooth®</li>
                  <li>Tea and coffeemaker</li>
                  <li>Premium bath products</li>
                  <li>Hair dryer</li>
                  <li>Plush robe</li>
                  <li>Iron and ironing board</li>
                  <li>In-room safe</li>
                </ul>
              </div>
              <div>
                <p className="roomname">Deluxe King City View</p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default RoomsSuites;