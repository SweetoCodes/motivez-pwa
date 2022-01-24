export default function FullWidthCTAButton(props) {
  return (
    <button
      className={"font-opensans font-bold " + props.style}
      onClick={props.clicked}
      type={props.type}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}
