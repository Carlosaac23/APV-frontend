import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='flex items-center justify-between bg-sky-500 px-10 py-4 text-white'>
      <Link to='/'>
        <h1 className='logo'>APV</h1>
      </Link>

      <nav className='flex items-center gap-6'>
        <Link className='hover:underline hover:underline-offset-2' to='/about'>
          About
        </Link>
        <Link
          className='rounded-sm bg-white px-6 py-2 text-sky-500 shadow-md hover:bg-neutral-100'
          to='/login'
        >
          Log In
        </Link>
      </nav>
    </header>
  );
}
