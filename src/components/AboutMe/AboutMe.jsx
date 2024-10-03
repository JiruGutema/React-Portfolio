import "./AboutMe.css";
import { Link } from "react-router-dom";
import image from "../../assets/images/file.png";
function AboutMe() {
  return (
    <>
      <div className="aboutContainer">
        <div className="aboutText">
          <h1>About Me</h1>
          <p>
            My name is Jiru Gutema, and I was born on February 06, 2003 in
            Adama, Oromia, Ethiopia. You can reach me via Telegram at @Jethior
            or by email at Jethior@gmail.com. My phone number is +251978556748.
            I'm excited to share my journey and experiences with you through
            this portfolio.
          </p>
          <p>
            I have expertise in a variety of technologies, including web
            development, Python, Java, networking, and Linux. I'm passionate
            about leveraging these skills to tackle complex challenges and
            create innovative solutions.
          </p>
          {/* <Link to="/GDSC_Certificate"> */}
          <button>Download CV</button>
          {/* </Link> */}
        </div>
        <div className="aboutImage">
          <div>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutMe;
