export default function SVGButton({ children, clicked, svg, style }) {
  return (
    <button className={"flex font-opensans items-center border px-6 py-2 rounded-full align-middle hover:bg-gray-100 " + style} onClick={clicked}>
        <div className="flex flex-row mx-auto space-x-4 items-center">
      <div className="">{svg}</div>
      <p className="">{children}</p>
      </div>
    </button>
  );
}
