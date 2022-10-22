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
      <p className="rooms_suiteshead">Rooms & Suites</p>
      <div className="therooms">
        <div className="room">
          <img src={_1} alt="" />
          <div>
            <p className="roomname">Deluxe King City View</p>

            <div className="details">
              <ul>
                <li>350-425 square feet</li>
                <li>Complimentary Wi-Fi</li>
                <li>Flat-screen TV</li>
                <li>Tea and coffeemaker</li>
                <li>Premium bath products</li>
                <li>Hair dryer</li>
                <li>Plush robe</li>
                <li>Iron and ironing board</li>
                <li>In-room safe</li>
              </ul>
            </div>
            <a href=" ">Reserve Now</a>
          </div>
        </div>

        <div className="room">
          <img src={_2} alt="" />
          <div>
            <p className="roomname">Cattle Baron Suite</p>

            <div className="details">
              <ul>
                <li>1,230 square feet</li>
                <li>Master bedroom with one king bed</li>
                <li>Second bedroom with two queen beds</li>
                <li>Two full master bathrooms</li>
                <li>Separate living room</li>
                <li>Grand dining room with antique table to seat eight</li>
                <li>Pillow top mattresses and plush bedding</li>
                <li>Nespresso machine</li>
                <li>Deluxe bathroom amenities</li>
              </ul>
            </div>
            <a href=" ">Reserve Now</a>
          </div>
        </div>

        <div className="room">
          <img src={_3} alt="" />
          <div>
            <p className="roomname">Yellow Rose Suite</p>

            <div className="details">
              <ul>
                <li>620 square feet</li>
                <li>One king bed</li>
                <li>Separate, spacious living and dining areas</li>
                <li>Intimate four-person dining table</li>
                <li>Pillow top mattress and plush bedding</li>
                <li>Designated dressing room</li>
                <li>Nespresso machine</li>
                <li>Deluxe bathroom amenities</li>
              </ul>
            </div>
            <a href=" ">Reserve Now</a>
          </div>
        </div>

        <div className="room">
          <img src={_7} alt="" />
          <div>
            <p className="roomname">Landmark Suite</p>

            <div className="details">
              <ul>
                <li>490-595 square feet</li>
                <li>Complimentary Wi-Fi</li>
                <li>Google Chromecast Live Streaming</li>
                <li>39""-65"" flat-screen TV, size varies by room</li>
                <li>Individually-controlled heat and air conditioning</li>
                <li>Blackout curtains</li>
                <li>Crib upon request</li>
                <li>Deluxe bathroom amenities</li>
                <li>iHome alarm clock with Bluetooth capability</li>
              </ul>
            </div>
            <a href=" ">Reserve Now</a>
          </div>
        </div>

        <div className="room">
          <img src={_9} alt="" />
          <div>
            <p className="roomname">1886 Suite 2 Kings</p>

            <div className="details">
              <ul>
                <li> 400-415 square feet</li>
                <li>Complimentary Wi-Fi</li>
                <li>Google Chromecast Live Streaming</li>
                <li>39""-65"" flat-screen TV, size varies by room</li>
                <li>Individually-controlled heat and air conditioning</li>
                <li>Blackout curtains</li>
                <li>Crib upon request</li>
                <li>Iron and ironing board</li>
                <li>Deluxe bathroom amenities</li>
              </ul>
            </div>
            <a href=" ">Reserve Now</a>
          </div>
        </div>

        <div className="room">
          <img src={_11} alt="" />
          <div>
            <p className="roomname">Petite Queen</p>

            <div className="details">
              <ul>
                <li>220-250 square feet</li>
                <li>One queen bed</li>
                <li>Flat-screen TV</li>
                <li>Pillow top mattresses and luxurious bedding</li>
                <li>Custom marble or Art Deco tiling bathroom</li>
                <li>Premium bath products</li>
                <li>Hair dryer</li>
              </ul>
            </div>
            <a href=" ">Reserve Now</a>
          </div>
        </div>

        <div className="room">
          <img src={_banner} alt="" />
          <div>
            <p className="roomname">Standard</p>

            <div className="details">
              <ul>
                <li>250-365 square feet</li>
                <li>One king bed, one queen bed or two queen beds</li>
                <li>Sitting area with leisure chair and work desk</li>
                <li>Pillow top mattress and plush bedding</li>
                <li>Custom marble or Art Deco tiling bathroom</li>
              </ul>
            </div>
            <a href=" ">Reserve Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomsSuites;
