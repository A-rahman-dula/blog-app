import React from 'react';
import { Modal, Button } from 'flowbite-react';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ open, onClose }) => {
  return (
    <Modal show={open} onClose={onClose} size='md'>
      <Modal.Header>Login / Register</Modal.Header>
      <Modal.Body>
        <div className='space-y-4'>
          <p>Placeholder for login/register form</p>
          {/* Add form fields and Redux dispatch logic here */}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button color='blue' onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AuthModal;
