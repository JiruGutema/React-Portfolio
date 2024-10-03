import "./Button.css";
function Button(args) {
  return (
    <>
      <button className={args.name + " toogleButtons"} onClick={args.onclick}>
        {args.name}
      </button>
    </>
  );
}
export default Button;
