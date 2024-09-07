import React, { useState } from 'react';
import { Toast, Button } from 'react-bootstrap';

const NotificationBox = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Button onClick={() => setShow(true)} variant="primary">Show Notifications</Button>
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header>
          <strong className="mr-auto">Notification</strong>
        </Toast.Header>
        <Toast.Body>Vaccine registration is open!</Toast.Body>
      </Toast>
    </>
  );
};

export default NotificationBox;
