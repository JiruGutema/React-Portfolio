import "./Testimony.css";
import TestimonyCard from "../TestimonyCard/TestimonyCard";
import profile from "../../assets/images/profile.png";

function Testimony() {
  return (
    <>
      <div className="TestimonyContainer">
        <h1>Testimonies</h1>
        <div className="TestimonyCardContainer">
          <TestimonyCard
            path={profile}
            name="Jiru Gutema"
            position="Software Engineering Student At AAU"
            detail='"I worked with Jiru and probably he is the coolest and bravest person i have ever seen"'
            link="https://t.me/Jethoir"
          />
          <TestimonyCard
            path={profile}
            name="Jiru Gutema"
            position="Software Engineering Student At AAU"
            detail='"I worked with Jiru and probably he is the coolest and bravest person i have ever seen"'
            link="https://t.me/Jethoir"
          />
          <TestimonyCard
            path={profile}
            name="Jiru Gutema"
            position="Software Engineering Student At AAU"
            detail='"I worked with Jiru and probably he is the coolest and bravest person i have ever seen"'
            link="https://t.me/Jethoir"
          />
          <TestimonyCard
            path={profile}
            name="Jiru Gutema"
            position="Software Engineering Student At AAU"
            detail='"I worked with Jiru and probably he is the coolest and bravest person i have ever seen"'
            link="https://t.me/Jethoir"
          />
          <TestimonyCard
            path={profile}
            name="Jiru Gutema"
            position="Software Engineering Student At AAU"
            detail='"I worked with Jiru and probably he is the coolest and bravest person i have ever seen"'
            link="https://t.me/Jethoir"
          />
        </div>
      </div>
    </>
  );
}
export default Testimony;
