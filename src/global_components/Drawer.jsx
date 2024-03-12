import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonToolbar, Drawer } from 'rsuite';

function DrawerForNav({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ButtonToolbar>
        <button type='button' aria-label='Save' onClick={() => setOpen(true)}>
          {children}
        </button>
      </ButtonToolbar>

      <Drawer
        size='12rem'
        placement='left'
        open={open}
        onClose={() => setOpen(false)}
      >
        <Drawer.Header>
          <Drawer.Title>
            <p className='font-bold'>Menu</p>
          </Drawer.Title>
          <Drawer.Actions>
            {/* <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)} appearance='primary'>
              Confirm
            </Button> */}
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body style={{ padding: '1rem' }}>
          <div className='flex flex-col '>
            <Link to='/map'>
              <button
                onClick={() => setOpen(false)}
                className='w-full p-4 border-b text-[1.2rem] text-start'
                type='button'
              >
                Map
              </button>
            </Link>
            <Link to='/calendar'>
              <button
                onClick={() => setOpen(false)}
                className='w-full p-4 border-b text-[1.2rem] text-start'
                type='button'
              >
                Calendar
              </button>
            </Link>
            <Link to='/explore'>
              <button
                onClick={() => setOpen(false)}
                className='w-full p-4 border-b text-[1.2rem] text-start'
                type='button'
              >
                Explore
              </button>
            </Link>
          </div>
        </Drawer.Body>
      </Drawer>
    </div>
  );
}

export default DrawerForNav;
