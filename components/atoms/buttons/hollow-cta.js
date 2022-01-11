export default function HollowCTAButton(props) {
    return (
      <button className="font-opensans font-bold" onClick={props.clicked}>
        {props.text}
      </button>
    )
  }
  