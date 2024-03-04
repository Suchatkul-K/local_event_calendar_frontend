function Avatar({ size }) {
  return (
    <div className='avatar placeholder'>
      <div className={`bg-green-500 text-neutral-content rounded-full ${size}`}>
        <span className='text-3xl'>D</span>
      </div>
    </div>
  );
}

export default Avatar;
