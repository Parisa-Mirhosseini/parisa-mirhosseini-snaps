import "../Footer/Footer.scss";
import Facebook from "../../assets/images/Facebook.svg";
import Twitter from "../../assets/images/X_twitter.svg";
import Instagram from "../../assets/images/Instagram.svg";
import Pinterest from "../../assets/images/Pinterest.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__column">
        <h1 className="footer__logo">Snaps</h1>
        <div className="footer__column--gereral--three">
        <div className="footer__column--general">
          <div className="footer__column--general-one">
            <h4>For Photographers</h4>
            <h4>Hire a Talent</h4>
            <h4 className="footer--inspiration">Inspiration</h4>
          </div>
          <div className="footer__column--general--two">
            <h4>About</h4>
            <h4>Careers</h4>
            <h4>Support</h4>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom--socials">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <img src={Twitter} alt="Twitter" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
            >
              <img src={Pinterest} alt="Pinterest" />
            </a>
          </div>
        </div>
        </div>
        </div>
        <div className="footer__bottom--copyright">
          <p>&copy; 2024 Snaps</p>
          <p>.Terms</p>
          <p>Privacy</p>
          <p>Cookies</p>
        </div>
      
    </footer>
  );
}

export default Footer;