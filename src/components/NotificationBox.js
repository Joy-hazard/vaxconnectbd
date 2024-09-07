import React, { useState } from 'react';
import { Toast, Button, Offcanvas, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bell } from 'react-bootstrap-icons'; // Correct import for the icon

const NotificationBox = () => {
  const [show, setShow] = useState(false);
  const [notificationCount, setNotificationCount] = useState(2); // Example notification count

  return (
    <>
      <Button
        variant="light"
        className="position-fixed bottom-1 end-0 m-5 d-flex align-items-center"
        onClick={() => setShow(true)}
        style={{
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          position: 'relative', // Ensure badge is positioned correctly
        }}
      >
        <Bell size={24} color="#007bff" />
        {notificationCount > 0 && (
          <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
            {notificationCount}
          </Badge>
        )}
      </Button>
      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement="end"
        className="rounded-3"
        style={{
          width: '350px',
          height: '500px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          marginRight: '10px', // Ensure it doesn’t touch the edge of the screen
        }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Notifications</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="notification-container">
            <Toast className="mb-3">
              <Toast.Body>Vaccine registration is open!</Toast.Body>
            </Toast>
            <Toast className="mb-3">
              <Toast.Body>Here you will find all types of vaccines.</Toast.Body>
            </Toast>
            {/* Add more toast notifications as needed */}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NotificationBox;
