import { Link } from 'react-router';
import Footer from '@/components/Footer';

export default function Login() {
  return (
    <>
      <div>
        <h2 className='my-6 text-center text-4xl font-black text-balance text-sky-500'>
          Inicia Sesión
        </h2>
      </div>

      <div className='mt-10 rounded-md border border-neutral-300 p-4 shadow-sm'>
        <form>
          <div className='mb-4'>
            <label className='mb-1 block text-sm font-medium text-neutral-700'>
              Correo Eléctronico
            </label>
            <input
              type='email'
              className='w-full rounded-md border border-neutral-300 bg-neutral-100 p-1 pl-2 inset-shadow-xs placeholder:text-sm focus:border-sky-500 focus:outline-none'
              placeholder='johndoe@hotmail.com'
            />
          </div>

          <div className='mb-4'>
            <label className='mb-1 block text-sm font-medium text-neutral-700'>
              Contraseña
            </label>
            <input
              type='password'
              className='w-full rounded-md border border-neutral-300 bg-neutral-100 p-1 pl-2 inset-shadow-xs placeholder:text-sm focus:border-sky-500 focus:outline-none'
              placeholder='password123'
            />
          </div>

          <input
            type='submit'
            value='Iniciar Sesión'
            className='mt-4 w-full cursor-pointer rounded-md bg-sky-500 py-2 text-neutral-50 transition-transform duration-150 ease-out hover:bg-sky-600 active:scale-97'
          />
        </form>

        <nav className='mt-4 text-center text-neutral-500'>
          <Link
            to='/register'
            className='block text-sm hover:text-neutral-800 hover:underline hover:underline-offset-2'
          >
            ¿No tienes cuenta? Regístrate
          </Link>
          <Link
            to='/forgot-password'
            className='text-sm hover:text-neutral-800 hover:underline hover:underline-offset-2'
          >
            Olvidé mi contraseña
          </Link>
        </nav>
      </div>
      <div className='fixed right-0 bottom-0 left-0'>
        <Footer />
      </div>
    </>
  );
}
