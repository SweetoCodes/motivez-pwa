export default function FullWidthCTAButton(props) {
    return (
      <button className="font-opensans font-bold" onClick={props.clicked}>
        {props.text}
      </button>
    )
  }
  