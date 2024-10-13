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
              para="I am very confident in both frontend and backend web development. I have built a number of 
              Website that's both static website and dynamic website. So, I can work on a number of technologies, like HTML, CSS, JS, REACT, BOOTSTRAP, NODEJS, EXPRESSJS, NESTJS, REST API, MONGODB, MYSQL, GIT that can be a considered as must know technologies.  "
              alt="I am very confident in both frontend and backend web development. I can work on a number of technologies..."
            />
            <Card
              path={Dsa}
              title="Data Structure and Algorithms"
              para="I took an introduction to Data structre and algorithms at Addis Ababa Univerity. I have solved a lot of problems on a leetcode Plat
              form"
              link="https://leetcode.com/u/Jiru_Gutema/"
              alt="I took an introduction to Data structre and algorithms at Addis Ababa University..."
            />
            <Card
              path={Linux}
              title="Linux and Networking"
              para="I have sufficient skill in Linux. I have a Certificate from a different organization regarding Linu. In networking I took the whole course at AAU and Cisco Netacad Academy"
              alt="I have sufficient skill in Linux. I have a Certificate..."
            />
            <Card
              path={Python}
              title="Python and Java"
              para="working with python is one of my favourite job to do in my career. i am python ensthuasists, where i developed some simple to Advanced Projects. regarding java, I took it as my second programming language at AAU"
              alt="working with python is one of my favourite job to do in my career..."
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
