function Footer() {
  return (
    <div className="footer">
      <div className="footer-inner">
        <p className="footerheading">Thanks for visiting Hotelvivi🤝</p>
        <div className="quick">
          <p className="footertopics"> Quick Links</p>
          <div className="thelinks">
            <a href="/">Home</a>
            <a href="/spa">SPA</a>
            <a href="/restaurant&bar">Restaurant & Bar</a>
            <a href="/offers">Offers</a>
            <a href="/rooms&suites">Rooms & Suites</a>
            <a href="/gallery">Gallery</a>
          </div>
        </div>
        <div className="devandreach">
          <div>
            <p className="footertopics">Developed By:</p>
            <a href="devsedem.netlify.app">Collins Abrusu</a>
          </div>
          <div>
            <p className="footertopics">Contact Us:</p>
            <p>info@hotelvivi.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
