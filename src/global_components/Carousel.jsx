function Carousel({ children, title }) {
  return (
    <>
      <div className=' font-bold text-[1.5rem] px-4'>{title}</div>
      <div className='w-full flex justify-center items-center'>
        <div className='carousel carousel-center max-w-sm p-4 space-x-4 bg-base '>
          {children}
        </div>
      </div>
    </>
  );
}

export default Carousel;
