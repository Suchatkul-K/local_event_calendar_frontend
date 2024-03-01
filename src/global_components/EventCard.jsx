function EventCard({ event }) {
  return (
    <div className='carousel-item'>
      <div className='card max-w-[16rem] max-h-[28rem] bg-base-100 shadow'>
        <figure>
          <img
            src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
            alt='Shoes'
          />
        </figure>
        <div className='card-body p-[2rem] '>
          <h2 className='card-title'>Event</h2>
          <p className='text-[0.75rem] pb-[1rem] border-b  max-h-[2.5rem] overflow-hidden'>
            If a dog chews shoes whose shoes does he choose? If a dog chews
            shoes whose shoes does he choose? If a dog chews shoes whose shoes
            does he choose? If a dog chews shoes whose shoes does he choose?
          </p>
          <div className='text-sm font-bold'>Category</div>
          <div className='card-actions flex flex-col'>
            <div className='text-sm font-bold'>
              Entrance{' '}
              <span className='text-green-400 text-[0.75rem]'> FREE</span>
            </div>
            <div className='text-sm font-bold text-gray-500'>
              Date : 28-11-1998
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
