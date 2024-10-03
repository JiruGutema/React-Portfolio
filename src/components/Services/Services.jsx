import Card from "../Card/Card";
import "./Services.css";
import Dsa from "../../assets/dsa.png";
import Linux from "../../assets/linux.png";
import Python from "../../assets/python.png";
import Web from "../../assets/web.png";
import More from "../../assets/more.png";
function Services() {
  return (
    <>
      <div className="services">
        <div>
          <div className="ServicesIntro">
            <h2>Services</h2>
            <p>
              As I mentioned earlier, the followings are the services that I
              provide!
            </p>
          </div>
          <div className="cards">
            <Card
              path={Web}
              title="Web Development"
              para="I am very confident in both frontend and backend web development"
            />
            <Card
              path={Dsa}
              title="Data Structure and Algorithms"
              para="I took an introduction to Data structre and algorithms at Addis Ababa Univerity. I have solved a lot of problems on a"
              link="https://leetcode.com/u/Jiru_Gutema/"
            />
            <Card
              path={Linux}
              title="Linux and Networking"
              para="I have sufficient skill in Linux. I have a Certificate from a different organization regarding Linu. In networking I took the whole course at AAU and Cisco Netacad Academy"
            />
            <Card
              path={Python}
              title="Python and Java"
              para="working with python is one of my favourite job to do in my career. i am python ensthuasists, where i developed some simple to Advanced Projects. regarding java, i took it as my second programming language at AAU"
            />
            <Card
              path={More}
              title="And the More"
              para="While the above information are just a tip of icebergs from my skills, i am also skilled in Database, Git and Github, Application Softwares and the like."
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Services;
