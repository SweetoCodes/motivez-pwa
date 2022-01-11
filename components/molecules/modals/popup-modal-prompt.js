import FullWidthCTAButton from "../../atoms/buttons/full-width-cta";

export default function PopupModalPrompt(props) {
  return (
    <div className={"flex flex-col space-y-4 " + props.moleculeStyle}>
      <div className="flex flex-row justify-between">
        <div>Icon</div>
        <div onClick={props.hide} className="cursor-pointer">X</div>
      </div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <FullWidthCTAButton text={props.ctatext} clicked={props.promptToInstall}  />
    </div>
  );
}
