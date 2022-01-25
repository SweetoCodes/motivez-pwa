export default function FullWidthCTAButton(props) {
  return (
    <button
      className={"font-opensans font-bold text-center " + props.style}
      onClick={props.clicked}
      type={props.type}
      disabled={props.disabled}
    >
      <div className="mx-auto">
      {props.text}
      </div>
    </button>
  );
}
