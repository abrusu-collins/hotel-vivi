import room_404 from "../img/room_404.jpg";

function Error404() {
  return (
    <div className="error404">
     <div className="error404_inner">
     <img src={room_404} alt="" />
      <div className="error_message">
        <p className="error_message_head">Room 404</p>
        <p className="error_message_about">
          This is an empty room and I do't think this is the room you want.
          Please go back home and take a look at some of our elegant rooms.
        </p>
        <a href="/"> Go Home</a>
      </div>
     </div>
    </div>
  );
}

export default Error404;
