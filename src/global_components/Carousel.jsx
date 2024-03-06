function Carousel({ children, title, hight }) {
  return (
    <div className='max-w-[100vw] w-full '>
      <div className='font-bold text-[1.5rem]'>{title}</div>
      <div className='grid grid-row-1 items-center '>
        <div
          className={`max-w-[100vw] w-full carousel carousel-center pt-4 space-x-3 bg-base ${hight}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
