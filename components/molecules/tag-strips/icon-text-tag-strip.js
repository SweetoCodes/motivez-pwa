import IconTextTag from "../../atoms/tags/icon-text-tag";

export default function IconTextTagStrip(props) {
  return (
    <div className={props.moleculeStyle}>
      {props.highlights.map((info, idx) => (
          <IconTextTag idx={idx} icon={info.icon} text={info.text} style=" py-3 sm:pr-3"/>
      ))}
    </div>
  );
}
