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
                        <p className="title"></p>
                        <p className="about"></p>
                    </div>
                    <img src="" alt="" />
                </div>
                <div className="serene">
                <div className="describe">
                        <p className="title"></p>
                        <p className="about"></p>
                    </div>
                    <img src="" alt="" />
                </div>
                <div className="comfort">
                <div className="describe">
                        <p className="title"></p>
                        <p className="about"></p>
                    </div>
                    <img src="" alt="" />
                </div>
                <div className="security">
                <div className="describe">
                        <p className="title"></p>
                        <p className="about"></p>
                    </div>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
     );
}

export default Place;