import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '@/context/AuthProvider';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { auth, logout } = useAuth();

  function toggleMenu() {
    setIsOpen(prevState => !prevState);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className='flex items-center justify-between bg-sky-500 px-10 py-4 text-white'>
      <Link to={auth?._id ? '/admin' : '/'}>
        <h1 className='logo'>APV</h1>
      </Link>

      <button
        className='cursor-pointer md:hidden'
        type='button'
        onClick={toggleMenu}
        aria-label='button'
      >
        <Menu size={30} />
      </button>

      <div
        className={`${isOpen ? 'flex' : 'hidden'} absolute top-0 right-0 bottom-0 left-0 z-10 flex-col items-center justify-center gap-6 bg-white text-black md:static md:flex md:flex-row md:bg-transparent md:text-white`}
      >
        <button
          className='absolute top-8 right-10 cursor-pointer md:hidden'
          type='button'
          onClick={toggleMenu}
          aria-label='button'
        >
          <X size={30} />
        </button>
        <nav className='flex flex-col items-center gap-16 text-2xl md:flex-row md:gap-6 md:text-base'>
          {auth?._id ? (
            <>
              <Link
                onClick={closeMenu}
                className='hover:underline hover:underline-offset-2'
                to='/admin'
              >
                Patients
              </Link>
              <Link
                onClick={closeMenu}
                className='hover:underline hover:underline-offset-2'
                to='/admin/profile'
              >
                Profile
              </Link>
              <Link
                className='rounded-sm bg-sky-400 px-6 py-2 text-white shadow-md md:bg-white md:text-sky-400 md:hover:bg-neutral-100'
                onClick={() => {
                  closeMenu();
                  logout();
                }}
              >
                Log Out
              </Link>
            </>
          ) : (
            <>
              <Link
                onClick={closeMenu}
                className='hover:underline hover:underline-offset-2'
                to='/about'
              >
                About
              </Link>
              <Link
                onClick={closeMenu}
                className='rounded-sm bg-sky-400 px-6 py-2 text-white shadow-md md:bg-white md:text-sky-400 md:hover:bg-neutral-100'
                to='/login'
              >
                Log In
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
