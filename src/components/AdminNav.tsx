import { Link } from 'react-router';

export default function AdminNav() {
  return (
    <nav className='flex gap-3'>
      <Link className='font-bold' to='/admin/profile'>
        Pefil
      </Link>
      <Link className='font-bold' to='/admin/change-password'>
        Cambiar Contraseña
      </Link>
    </nav>
  );
}
