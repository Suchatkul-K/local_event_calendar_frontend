function PictureSeason({ src, month }) {
  return (
    <div className='relative  h-[14rem] rounded-md overflow-hidden '>
      <img src={src} alt='' className='h-full w-full object-cover' />
      <div className='absolute left-1/2 bottom-1 transform translate-x-[-50%]  text-white'>
        {month}
      </div>
    </div>
  );
}

export default PictureSeason;
