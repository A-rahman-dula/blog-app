import React, { useState } from 'react';
import { Navbar as FlowNavbar, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';
import { resetAuthState } from '../../features/auth/authSlice';
import AuthModal from '../../features/auth/components/AuthModal';

const Navbar = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(resetAuthState());
  };

  return (
    <FlowNavbar fluid rounded className='bg-white dark:bg-gray-900'>
      <FlowNavbar.Brand
        as={Link}
        to='/'
        className='self-center whitespace-nowrap text-xl font-semibold text-blue-600 dark:text-white'
      >
        Link-Up
      </FlowNavbar.Brand>
      <div className='flex md:order-2 gap-2'>
        {user ? (
          <Button color='blue' onClick={handleLogout} aria-label='Log out'>
            Logout
          </Button>
        ) : (
          <Button
            color='blue'
            onClick={() => setIsAuthModalOpen(true)}
            aria-label='Open login/register modal'
          >
            Login / Register
          </Button>
        )}
        <FlowNavbar.Toggle aria-label='Toggle navigation menu' />
      </div>
      <FlowNavbar.Collapse>
        <FlowNavbar.Link as={Link} to='/' active>
          Home
        </FlowNavbar.Link>
        <FlowNavbar.Link as={Link} to='/blog'>
          Blog
        </FlowNavbar.Link>
      </FlowNavbar.Collapse>
      <AuthModal
        open={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </FlowNavbar>
  );
};

export default Navbar;
