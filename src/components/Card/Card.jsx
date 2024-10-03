import "./Card.css";
function Card(args) {
  return (
    <>
      <div className={args.classname}>
        <img src={args.path} alt="" className="cardIcon" />
        <h3>{args.title}</h3>
        <p>{args.para}</p>
        <a href={args.link} target="_blank">
          {args.linkTitle}
        </a>
      </div>
    </>
  );
}
Card.defaultProps = {
  classname: "card",
  path: "",
  title: "",
  para: "",
  link: "",
  linkTitle: "",
};
export default Card;
