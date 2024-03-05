function IncomingCard() {
  return (
    <div className='carousel-item'>
      <div className='w-[16rem] h-[20rem] relative rounded-lg overflow-hidden'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS1Jr-enyKqcIKnbKb9K3KJPDxHalZEJ9wbZaa3dk9bws1ollRfzcdmFyG-_JtQr6hs7g&usqp=CAU'
          alt=''
          className='object-cover w-full h-full'
        />
        <div className='absolute bottom-0 left-0 text-white p-4'>
          <h2 className='font-bold'>Event</h2>
          <p className='text-[0.75rem]'>place...</p>
          <p className='text-[0.75rem]'>Date : 28-11-1998</p>
        </div>
      </div>
    </div>
  );
}

export default IncomingCard;
