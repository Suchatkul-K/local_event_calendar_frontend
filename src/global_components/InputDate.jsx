export default function InputDate({
  title = 'date',
  onChange,
  name,
  type = 'date',
}) {
  return (
    <div>
      <div className='font-semibold '>{title}</div>
      <input
        className='bg-inherit border border-gray-300 rounded-btn px-1 py-1 w-[90%] text-center'
        type={type}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}
