import { useState } from 'react';
// import { Drawer, ButtonToolbar, Button, Placeholder } from 'rsuite';
import 'rsuite/Drawer/styles/index.css';

import {
  Drawer,
  RadioGroup,
  Radio,
  ButtonToolbar,
  Button,
  IconButton,
  Placeholder,
} from 'rsuite';

function ProfileDrawer({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ButtonToolbar>
        <Button onClick={() => setOpen(true)}>{children}</Button>
      </ButtonToolbar>

      <Drawer size='300px' open={open} onClose={() => setOpen(false)}>
        <Drawer.Header>
          <Drawer.Title>Your Event</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Placeholder.Paragraph />
        </Drawer.Body>
      </Drawer>
    </>
  );
}

export default ProfileDrawer;
