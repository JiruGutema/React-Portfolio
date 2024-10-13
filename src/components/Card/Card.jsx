import React, { useState } from "react";
import "./Card.css";

function Card(args) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleParagraph = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={args.classname}>
      <img src={args.path} alt="" className="cardIcon" />
      <h3>{args.title}</h3>
      <div className="paragraphContainer">
        <p>{isExpanded ? args.para : args.alt}</p>
        <button className="show-btn" onClick={toggleParagraph}>
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      </div>

      <a href={args.link} target="_blank" rel="noopener noreferrer">
        {args.linkTitle}
      </a>
    </div>
  );
}

Card.defaultProps = {
  classname: "card",
  path: "",
  title: "",
  para: "",
  link: "",
  linkTitle: "",
  alt: "",
};

export default Card;
