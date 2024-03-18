import { useState } from 'react';
import 'rsuite/Drawer/styles/index.css';
import 'rsuite/Animation/styles/index.css';

import {
  Drawer,
  ButtonToolbar,
  Button,
  Animation,
} from 'rsuite';

function ProfileDrawer({ children, props }) {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [placement, setPlacement] = useState('right');

  return (
    <>
      <ButtonToolbar>
        <Button onClick={() => setOpen(true)}>{children}</Button>
      </ButtonToolbar>
      <Animation.Slide in={show} placement={placement}>
        <Drawer size='20rem' open={open} onClose={() => setOpen(false)}>
          <Drawer.Header>
            <Drawer.Title>
              <div className='font-bold'>Reminded Events</div>
            </Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <div className='flex flex-col gap-3'>{props}</div>
          </Drawer.Body>
        </Drawer>
      </Animation.Slide>
    </>
  );
}

export default ProfileDrawer;
