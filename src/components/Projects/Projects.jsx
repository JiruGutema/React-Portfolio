import Button from "../Button/Button";
import "./Projects.css";
import Card from "../Card/Card";
function Projects() {
  const buttons = document.querySelectorAll(".toogleButtons");
  let lastClickedButton = null;

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (lastClickedButton) {
        lastClickedButton.style.backgroundColor = "lightgray";
        lastClickedButton.style.color = "black";
      }

      this.style.backgroundColor = "gray";
      this.style.color = "white";

      lastClickedButton = this;
    });
  });
  function all() {
    document.getElementsByClassName("portfolio")[0].style.display = "block";
    document.getElementsByClassName("GDSC")[0].style.display = "block";
    document.getElementsByClassName("landingPage")[0].style.display = "block";
    document.getElementsByClassName("Scanner")[0].style.display = "block";
    document.getElementsByClassName("file-Encryption")[0].style.display =
      "block";
    document.getElementsByClassName("dsa")[0].style.display = "block";
  }
  function web() {
    document.getElementsByClassName("portfolio")[0].style.display = "block";
    document.getElementsByClassName("GDSC")[0].style.display = "block";
    document.getElementsByClassName("landingPage")[0].style.display = "block";
    document.getElementsByClassName("Scanner")[0].style.display = "none";
    document.getElementsByClassName("file-Encryption")[0].style.display =
      "none";
    document.getElementsByClassName("dsa")[0].style.display = "none";
  }
  function python() {
    document.getElementsByClassName("portfolio")[0].style.display = "none";
    document.getElementsByClassName("GDSC")[0].style.display = "none";
    document.getElementsByClassName("landingPage")[0].style.display = "none";
    document.getElementsByClassName("Scanner")[0].style.display = "block";
    document.getElementsByClassName("file-Encryption")[0].style.display =
      "block";
    document.getElementsByClassName("dsa")[0].style.display = "none";
  }
  function dsa() {
    document.getElementsByClassName("portfolio")[0].style.display = "none";
    document.getElementsByClassName("GDSC")[0].style.display = "none";
    document.getElementsByClassName("landingPage")[0].style.display = "none";
    document.getElementsByClassName("Scanner")[0].style.display = "none";
    document.getElementsByClassName("file-Encryption")[0].style.display =
      "none";
    document.getElementsByClassName("dsa")[0].style.display = "block";
  }
  return (
    <>
      <div className="projects">
        <div className="innerProjects">
          <h2>Projects</h2>
          <p>
            Welcome to the section where I showcase some of the projects I've
            been working on. As a passionate developer, I'm always exploring new
            technologies, honing my skills, and bringing creative ideas to life
            through code.
          </p>

          <div className="buttons">
            <Button name="ALL" onclick={all} />
            <Button name="WEB DEV'T" onclick={web} />
            <Button name="PYTHON" onclick={python} />
            {/* <Button name="NETWORKING" onclick={all} /> */}
            <Button name="DSA" onclick={dsa} />
          </div>
          <div className="projectCards">
            <Card
              title="My Own Portfolio"
              para="I built my own portfolio using React to showcase my skills and projects, reflecting my journey as a developer. It highlights my creativity and technical expertise, making it easy for potential clients and employers to see what I can offer."
              link="https://jirugutema.netlify.app"
              linkTitle="Github"
              classname="portfolio card"
              alt="I built my own portfolio using React to showcase my skills and projects..."
            />
            <Card
              title="GDSC Trainer"
              para="I received a trainer certificate from Google Developer Student Club (GDSC) for teaching frontend development, including HTML, CSS, and JavaScript, along with React frameworks. I also guided students in working on various projects, enhancing their practical skills."
              link="./Jiru.pdf"
              linkTitle="Certification"
              classname="GDSC card"
              download
              alt="I received a trainer certificate from Google Developer Student Club (GDSC)..."
            />

            <Card
              title="Game Landing Page,Static Website for Coffee Exporting "
              para="I built my own portfolio using React to showcase my skills and projects, reflecting my journey as a developer. It highlights my creativity and technical expertise, making it easy for potential clients and employers to see what I can offer."
              link="http://guragevrstudio.netlify.app/"
              linkTitle="Play Game"
              classname="landingPage card"
              alt="I built my own portfolio using React to showcase my skills and projects..."
            />

            <Card
              title="Vulnerablity Scanner, DDOS Attack, PC System Information"
              para="Developed a vulnerability scanner and DDoS attack simulation tool in Python during a summer camp program at INSA Ethiopia, focusing on identifying security vulnerabilities and displaying PC system information."
              link="https://github.com/JiruGutema/Python-Valnerablity-Scanner"
              linkTitle="Github"
              classname="Scanner card"
              alt="Developed a vulnerability scanner and DDoS attack simulation tool in Python..."
            />
            <Card
              title="File Encryption Software."
              para="This File Encryption Software uses cryptography to securely encrypt and decrypt files. By employing robust encryption algorithms, the software ensures the confidentiality and integrity of sensitive information. The encrypted files can only be unlocked using a secure key, making it an ideal solution for protecting personal or business data."
              link="https://github.com/JiruGutema/file-encryption-"
              linkTitle="Github"
              classname="file-Encryption card"
              alt="This File Encryption Software uses cryptography to securely encrypt and decrypt files..."
            />
            <Card
              title="Data Structure and Algorithms"
              para="I took an introduction to Data structre and algorithms at Addis Ababa Univerity. I have solved a lot of problems on a Leetcode. You can see my achievements below using the given Link to my profile on leetcode."
              link="https://leetcode.com/u/Jiru_Gutema/"
              linkTitle="Leetcode"
              classname="dsa card"
              alt="I took an introduction to Data structre and algorithms at Addis Ababa Univerity..."
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;
