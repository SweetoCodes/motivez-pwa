export default function IconTextTag(props) {
    return (
      <div key={props.idx} className={"flex flex-row space-x-2 align-middle max-w-[400px] " + props.style}>
          <div className= "flex items-center">{props.icon}</div>
          <p className="flex items-center ">{props.text}</p>
      </div>
    )
  }
  