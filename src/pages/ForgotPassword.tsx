import type React from 'react';
import { useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'sonner';
import axiosClient from '@/config/axios';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
    } catch (error: any) {
      toast.error(error.response.data.msg);
    }
  }
  return (
    <>
      <div className='flex flex-col items-center'>
        <h2 className='my-6 text-center text-4xl font-black text-balance text-sky-500'>
          Recupera Tu Contraseña
        </h2>

        <img alt='Vet logo' className='hidden w-40 md:block' src='/vet.svg' />
      </div>

      <div className='mx-auto mt-10 max-w-[85%] rounded-md border border-neutral-300 p-4 shadow-sm md:mx-0 md:max-w-[85%]'>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              className='mb-1 block text-sm font-medium text-neutral-700'
              htmlFor='email'
            >
              Correo Eléctronico
            </label>
            <input
              className='w-full rounded-md border border-neutral-300 bg-neutral-100 p-1 pl-2 inset-shadow-xs placeholder:text-sm focus:border-sky-500 focus:outline-none'
              id='email'
              onChange={(e) => setEmail(e.target.value)}
              placeholder='johndoe@hotmail.com'
              type='email'
              value={email}
            />
          </div>

          <input
            className='mt-4 w-full rounded-md bg-sky-500 py-2 text-neutral-50 shadow-sm transition-transform duration-150 ease-out hover:cursor-pointer hover:bg-sky-600 active:scale-97'
            type='submit'
            value='Restablecer Contraseña'
          />
        </form>

        <nav className='mt-4 text-center text-neutral-500'>
          <Link
            className='block text-sm hover:text-neutral-800 hover:underline hover:underline-offset-2'
            to='/'
          >
            ¿Ya tienes una cuenta? Inicia Sesión
          </Link>
          <Link
            className='text-sm hover:text-neutral-800 hover:underline hover:underline-offset-2'
            to='/register'
          >
            ¿No tienes cuenta? Regístrate
          </Link>
        </nav>
      </div>
    </>
  );
}
