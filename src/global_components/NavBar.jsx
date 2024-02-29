import Button from './Button';

function NavBar() {
  return (
    <div
      className='flex justify-around  w-full p-3
    text-base font-semibold bg-[#ffffff]'
    >
      <div>MENU</div>
      <div className='font-bold text-xl'>LOGO</div>
      <div className='w-fit'>
        <Button>Login</Button>
      </div>
    </div>
  );
}

export default NavBar;
