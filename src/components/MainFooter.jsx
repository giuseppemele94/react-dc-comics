import facebook from "../assets/img/footer-facebook.png";
import twitter from "../assets/img/footer-twitter.png";
import youtube from "../assets/img/footer-youtube.png";
import pinterest from "../assets/img/footer-pinterest.png";
import periscope from "../assets/img/footer-periscope.png";

const MainFooter = () => {
  return (
    <footer className="site-footer">
      
      <div className="footer-top">
        <div className="footer-bg-logo" />

        <nav className="footer-nav">
          
          <div className="footer-col">
            <h4>DC COMICS</h4>
            <ul className="footer-list">
              <li><a href="#">Characters</a></li>
              <li><a href="#">Comics</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">TV</a></li>
              <li><a href="#">Games</a></li>
              <li><a href="#">Videos</a></li>
              <li><a href="#">News</a></li>
            </ul>

            <h4>SHOP</h4>
            <ul className="footer-list">
              <li><a href="#">Shop DC</a></li>
              <li><a href="#">Shop DC Collectibles</a></li>
            </ul>
          </div>

          
          <div className="footer-col">
            <h4>DC</h4>
            <ul className="footer-list">
              <li><a href="#">Terms Of Use</a></li>
              <li><a href="#">Privacy Policy (New)</a></li>
              <li><a href="#">Ad Choices</a></li>
              <li><a href="#">Advertising</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Subscriptions</a></li>
              <li><a href="#">Talent Workshops</a></li>
              <li><a href="#">CPSC Certificates</a></li>
              <li><a href="#">Ratings</a></li>
              <li><a href="#">Shop Help</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          
          <div className="footer-col">
            <h4>SITES</h4>
            <ul className="footer-list">
              <li><a href="#">DC</a></li>
              <li><a href="#">MAD Magazine</a></li>
              <li><a href="#">DC Kids</a></li>
              <li><a href="#">DC Universe</a></li>
              <li><a href="#">DC Power Visa</a></li>
            </ul>
          </div>
        </nav>
      </div>

      
      <section className="bottoms-bar">
        <div className="bottom-bar-inner">
          <button className="signup-btn">SIGN-UP NOW!</button>

          <div className="social">
            <span>FOLLOW US</span>
            <img src={facebook} alt="Facebook" />
            <img src={twitter} alt="Twitter" />
            <img src={youtube} alt="YouTube" />
            <img src={pinterest} alt="Pinterest" />
            <img src={periscope} alt="Periscope" />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default MainFooter;
