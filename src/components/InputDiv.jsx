export default function InputDiv({
  type,
  name,
  placeholder,
  label,
  value,
  onChange
}) {
  return (
    <div className='mb-5'>
      <label
        className='mb-2 block text-lg font-bold text-sky-800 uppercase'
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className='w-full rounded-xl border border-gray-200 bg-gray-50 p-3 shadow-xs placeholder:text-sm placeholder:text-gray-500 focus:outline-2 focus:outline-offset-2 focus:outline-sky-300 focus:outline-solid'
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
