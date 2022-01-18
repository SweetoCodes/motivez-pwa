export default function TextTag(props) {
    return (
      <div key={props.idx} className={"flex flex-row align-middle " + props.style}>
          <p className="flex px-4 text-white py-1 bg-motivezred rounded-full items-center ">{props.text}</p>
      </div>
    )
  }
  