function Carousel({ children }) {
  return (
    <>
      <div className='ps-[1.8rem] font-bold text-[1.5rem] py-[1rem]'>
        Highlight
      </div>
      <div className='w-full flex justify-center items-center'>
        <div className='carousel carousel-center max-w-sm p-4 space-x-4 bg-base '>
          {children}
        </div>
      </div>
    </>
  );
}

export default Carousel;
