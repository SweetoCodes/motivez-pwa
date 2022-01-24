export default function TextInput({
  style,
  label,
  type,
  error,
  id,
  placeholder,
}) {
  return (
    <div class={style}>
      <label class="block text-gray-700 text-sm font-bold mb-2" for={type}>
        {label}
      </label>
      <input
        class={
          "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-gray-400 " +
          (error && " border-red-500 mb-3")
        }
        id={id}
        type={type}
        placeholder={placeholder}
      />
      {error && <p class="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
}
