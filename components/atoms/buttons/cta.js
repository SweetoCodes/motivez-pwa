export default function CTAButton(props) {
  return (
    <div className={props.containerStyle}>
      <a href={props.href} target={props.target}>
        <button
          className={
            "flex font-opensans justify-center text-white rounded-md text-lg text-center font-bold px-4 py-1.5 bg-motivezred hover:bg-motivezreddark " +
            props.style
          }
          onClick={props.clicked}
        >
          {props.text}
        </button>
      </a>
    </div>
  );
}
