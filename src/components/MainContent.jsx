import digitalComics from "../assets/img/buy-comics-digital-comics.png";
import dcMerchandise from "../assets/img/buy-comics-merchandise.png";
import subscription from "../assets/img/buy-comics-subscriptions.png";
import locator from "../assets/img/buy-comics-shop-locator.png";
import dcPowerVisa from "../assets/img/buy-dc-power-visa.svg";



const MainContent = () => {
    return (
        <main>
            <section className="contents">
                <div class="content-text">
                    <h2>-- Content goes here --</h2>
                </div>
            </section>

            <section className="services">

                <div class="services-bar">

                    <a class="service-item" href="#">
                        <img className="service-img" src={digitalComics} alt="Digital Comics" />
                        <span>DIGITAL COMICS</span>
                    </a>

                      <a class="service-item" href="#">
                        <img className="service-img" src={dcMerchandise} alt="Dc Merchandise" />
                        <span>DC MERCHANDISE</span>
                    </a>

                      <a class="service-item" href="#">
                        <img className="service-img" src={subscription} alt="Subscription" />
                        <span>SUBSCRIPTIONS</span>
                    </a>

                     <a class="service-item" href="#">
                        <img className="service-img" src={locator} alt="Locator" />
                        <span>COMIC SHOP LOCATOR</span>
                    </a>

                     <a class="service-item" href="#">
                        <img className="service-img" src={dcPowerVisa} alt="Visa" />
                        <span>DC POWER VISA</span>
                    </a>

                </div>

            </section>
        </main>
    )
}

export default MainContent