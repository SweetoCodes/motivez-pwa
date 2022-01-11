import IconTextTag from "../atoms/tags/icon-text-tag";

export default function TagStrip(props) {
  return (
    <div className={"flex sm:flex-row flex-col sm:flex-wrap " + props.moleculeStyle}>
      {props.highlights.map((info, idx) => (
          <IconTextTag idx={idx} icon={info.icon} text={info.text} style="mx-auto px-4 py-3"/>
      ))}
    </div>
  );
}
