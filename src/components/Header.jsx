import { Link } from 'react-router';
import useAuth from '@/hooks/useAuth';

export default function Header() {
  const { logOut } = useAuth();

  return (
    <header className='bg-sky-500 py-8'>
      <div className='container mx-auto flex flex-col items-center justify-between px-4 lg:flex-row'>
        <h1 className='mb-4 text-center text-xl font-bold text-balance text-neutral-50 lg:mb-0'>
          Administrador de Pacientes de{' '}
          <span className='text-2xl font-black'>Veterinaria</span>
        </h1>

        <nav className='flex gap-4'>
          <Link
            to='/admin'
            className='text-sm font-bold text-neutral-50 hover:underline hover:underline-offset-2 lg:text-base'
          >
            Pacientes
          </Link>
          <Link
            to='/admin/profile'
            className='text-sm font-bold text-neutral-50 hover:underline hover:underline-offset-2 lg:text-base'
          >
            Perfil
          </Link>

          <button
            type='button'
            className='text-sm font-bold text-neutral-50 hover:cursor-pointer hover:underline hover:underline-offset-2 lg:text-base'
            onClick={logOut}
          >
            Cerrar Sesión
          </button>
        </nav>
      </div>
    </header>
  );
}
