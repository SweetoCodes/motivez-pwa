import TextTag from "../../atoms/tags/text-tag";

export default function TextTagStrip(props) {
  return (
    <div className={props.moleculeStyle}>
      {props.tags.map((info, idx) => (
          <TextTag idx={idx} text={info} style=" py-3"/>
      ))}
    </div>
  );
}