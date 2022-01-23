export default function TextLineDivider({ text, style }) {
  return (
    <div className="flex flex-row items-center">
      <div className="flex-grow h-0.5 bg-gray-200 "></div>
      <p className="text-center text-xs text-gray-600 mx-2">{text}</p>
      <div className="flex-grow h-0.5 bg-gray-200 "></div>
    </div>
  );
}
