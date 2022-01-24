export default function TextInput({
  style,
  label,
  type,
  error,
  id,
  placeholder,
  value,
  handleChange
}) {
  return (
    <div className={style}>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={type}>
        {label}
      </label>
      <input
        className={
          "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-gray-400 " +
          (error && " border-red-500 mb-3") +
          (error==false && " border-b-green-700")
        }
        id={id}
        type={type}
        placeholder={placeholder}
        value={value} 
        onChange={handleChange}
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
}
