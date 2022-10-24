function Error404() {
    return ( 
        <div className="error404">
            <img src="" alt="" />
            <div className="error_message">
                <p className="error_message_head">
                    Room 404
                </p>
                <p className="error_message_about">
                    This is an empty room and I do't think this is the room you want. 
                    Please go back home and take a look at some of our elegant rooms.
                </p>
                <a href="/"> Go Home</a>
            </div>
        </div>
     );
}

export default Error404;