import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  function changeBackground() {
    const container = document.getElementsByClassName("header")[0];
    const child = document.getElementsByClassName("menuListing")[0];
    const containerWidth = container.offsetWidth;

    if (containerWidth > 768) {
      child.style.display = "flex";
    } else {
      child.style.display = "none";
    }
  }

  window.addEventListener("resize", changeBackground);
  window.addEventListener("load", changeBackground);

  function menuOnclicked() {
    let target = document.querySelector(".menuListing");
    let element = document.querySelector(".header");
    const width = element.getBoundingClientRect().width;
    if (width <= 768 && target.style.display === "none") {
      target.style.display = "flex";
    } else if (target.style.display === "flex" && width <= 768) {
      console.log("Condition 2 met: Hiding menu");
      target.style.display = "none";
    } else {
      target.style.display = "flex";
    }
  }

  return (
    <>
      <header className="header">
        <div>
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="menu" onClick={menuOnclicked}>
            <p className="menuName">Menu</p>
            <ul className="menuListing">
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
        </div>
      </header>
    </>
  );
}
export default Header;
