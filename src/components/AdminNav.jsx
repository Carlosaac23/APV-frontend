import { Link } from 'react-router-dom';

export default function AdminNav() {
  return (
    <nav className='flex justify-center gap-4 bg-sky-100 p-2 md:p-4'>
      <Link to='/admin/profile'>Profile</Link>
      {'|'}
      <Link to='/admin/change-password'>Change Password</Link>
    </nav>
  );
}
