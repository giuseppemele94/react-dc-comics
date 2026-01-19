import facebook from "../assets/img/footer-facebook.png";
import twitter from "../assets/img/footer-twitter.png";
import youtube from "../assets/img/footer-youtube.png";
import pinterest from "../assets/img/footer-pinterest.png";
import periscope from "../assets/img/footer-periscope.png";


const MainFooter = () => {

  //struttura dati per footer 
  const footerSections = [
    {
      title: "DC COMICS",
      links: [
        { label: "Characters", href: "#" },
        { label: "Comics", href: "#" },
        { label: "Movies", href: "#" },
        { label: "TV", href: "#" },
        { label: "Games", href: "#" },
        { label: "Videos", href: "#" },
        { label: "News", href: "#" },
      ],
    },

    {
      title: "SHOP",
      links: [
        { label: "Shop DC", href: "#" },
        { label: "Shop DC Collectibles", href: "#" },
      ],
    },

    {
      title: "DC",
      links: [
        { label: "Terms Of Use", href: "#" },
        { label: "Privacy Policy (New)", href: "#" },
        { label: "Ad Choices", href: "#" },
        { label: "Jobs", href: "#" },
        { label: "Subscriptions", href: "#" },
        { label: "Talent Workshops", href: "#" },
        { label: "CPSC Certificates", href: "#" },
        { label: "Ratings", href: "#" },
        { label: "Shop Help", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },

    {
      title: "SITES",
      links: [
        { label: "DC", href: "#" },
        { label: "MAD Magazine", href: "#" },
        { label: "DC Kids", href: "#" },
        { label: "DC Universe", href: "#" },
        { label: "DC Power Visa", href: "#" },
      ],
    },

  ];


  //funzione di rendering Link 
function renderProdotti(arrayLink) {
        return arrayLink.map((elementLink, index) => {
            return (<li key={index}>
                <a href={elementLink.href}>{elementLink.label}</a>
            </li>)
        })
    }

  return (
    <footer className="site-footer">

      <div className="footer-top">
        <div className="footer-bg-logo" />

        <nav className="footer-nav">

          {footerSections.map((footerSec, indice) => (
            <div className="footer-col" key="indice">
              <h4>{footerSec.title}</h4>
              <ul className="footer-list">
                {renderProdotti(footerSec.links)}
              </ul>

            </div>
          ))}


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
