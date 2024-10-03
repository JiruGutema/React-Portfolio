import "./Footer.css";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.png";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import x from "../../assets/x.png";
import telegram from "../../assets/telegram.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="workingWithUs">
          <p>Interested to Work With Me? Drop Me a Line</p>
          <p className="emailAddress">jethior1@gmail.com</p>
        </div>

        <div className="social">
          <div className="socialConnection">
            <ul>
              <li>
                <a href="https://github.com/JiruGutema">
                  {" "}
                  <img src={github} alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jiru-gutema/">
                  {" "}
                  <img src={linkedin} alt="" />
                </a>
              </li>

              <li>
                <a href="https://X.com/JiruGutema">
                  {" "}
                  <img src={x} alt="" />
                </a>
              </li>
              <li>
                <a href="https://t.me/jethior">
                  {" "}
                  <img src={telegram} alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/jirugutema/">
                  {" "}
                  <img src={instagram} alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/jiru.gutema/">
                  {" "}
                  <img src={facebook} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footerMenu"></div>
        </div>
        <div className="footerMenuListing">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT ME</Link>
            </li>
            <li>
              <Link to="/services">SERVICES</Link>
            </li>
            <li>
              <Link to="/projects">PROJECTS</Link>
            </li>
            <li>
              <Link to="/testimony">TESTIMONY</Link>
            </li>
            <li>
              <Link to="/contacts">CONTACT ME</Link>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p>&copy; 2024 Jiren. All Rights Reserved. </p>
        </div>

        <img src="" alt="" />
      </footer>
    </>
  );
}
export default Footer;
