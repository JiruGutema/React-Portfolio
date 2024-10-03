import "./TestimonyCard.css";

function TestimonyCard(args) {
  return (
    <>
      <div className="Testimony">
        <div className="testimonyContainer">
          <img src={args.path} alt={args.name} />
          <h3>{args.name}</h3>
          <h6>{args.position}</h6>

          <p>{args.detail}</p>
          <p className="paraLink">
            Contact:
            <a href={args.link}>{args.name}</a>
          </p>
        </div>
      </div>
    </>
  );
}
export default TestimonyCard;
