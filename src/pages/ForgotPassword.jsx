import { useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'sonner';
import axiosClient from '@/config/axios';
import Footer from '@/components/Footer';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    if (email === '' || email.length < 6) {
      return toast.warning('El email es obligatorio.');
    }

    try {
      const { data } = await axiosClient.post(
        '/veterinarians/forgot-password',
        {
          email,
        },
      );

      toast.success(data.msg);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }
  return (
    <>
      <div>
        <h2 className='my-6 text-center text-4xl font-black text-balance text-sky-500'>
          Recupera Tu Contraseña
        </h2>
      </div>

      <div className='mt-10 rounded-md border border-neutral-300 p-4 shadow-sm'>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='mb-1 block text-sm font-medium text-neutral-700'>
              Correo Eléctronico
            </label>
            <input
              type='email'
              className='w-full rounded-md border border-neutral-300 bg-neutral-100 p-1 pl-2 inset-shadow-xs placeholder:text-sm focus:border-sky-500 focus:outline-none'
              placeholder='johndoe@hotmail.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <input
            type='submit'
            value='Restablecer Contraseña'
            className='mt-4 w-full cursor-pointer rounded-md bg-sky-500 py-2 text-neutral-50 transition-transform duration-150 ease-out hover:bg-sky-600 active:scale-97'
          />
        </form>

        <nav className='mt-4 text-center text-neutral-500'>
          <Link
            to='/'
            className='block text-sm hover:text-neutral-800 hover:underline hover:underline-offset-2'
          >
            ¿Ya tienes una cuenta? Inicia Sesión
          </Link>
          <Link
            to='/register'
            className='text-sm hover:text-neutral-800 hover:underline hover:underline-offset-2'
          >
            ¿No tienes cuenta? Regístrate
          </Link>
        </nav>
      </div>
      <div className='fixed right-0 bottom-0 left-0'>
        <Footer />
      </div>
    </>
  );
}
