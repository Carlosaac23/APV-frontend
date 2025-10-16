import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'sonner';
import axiosClient from '@/config/axios';
import useAuth from '@/hooks/useAuth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useAuth() as any;

  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if ([email, password].includes('')) {
      return toast.error('Todos los campos son obligatorios');
    }

    try {
      const { data } = await axiosClient.post('/veterinarians/login', {
        email,
        password,
      });

      localStorage.setItem('token', data.token);
      setAuth(data);
      navigate('/admin');
    } catch (error: any) {
      toast.error(error.response.data.msg);
    }
  }

  return (
    <>
      <div className='flex flex-col items-center'>
        <h2 className='my-6 text-center text-4xl font-black text-balance text-sky-500'>
          Inicia Sesión
        </h2>

        <img alt='Vet logo' className='hidden w-40 md:block' src='/vet.svg' />
      </div>

      <div className='mx-auto mt-10 max-w-[85%] rounded-md border border-neutral-300 p-4 shadow-sm md:mx-0 md:max-w-[85%]'>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
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

          <div className='mb-4'>
            <label
              className='mb-1 block text-sm font-medium text-neutral-700'
              htmlFor='password'
            >
              Contraseña
            </label>
            <input
              className='w-full rounded-md border border-neutral-300 bg-neutral-100 p-1 pl-2 inset-shadow-xs placeholder:text-sm focus:border-sky-500 focus:outline-none'
              id='password'
              onChange={(e) => setPassword(e.target.value)}
              placeholder='password123'
              type='password'
              value={password}
            />
          </div>

          <input
            className='shadwow-sm mt-4 w-full rounded-md bg-sky-500 py-2 text-neutral-50 transition-transform duration-150 ease-out hover:cursor-pointer hover:bg-sky-600 active:scale-97'
            type='submit'
            value='Iniciar Sesión'
          />
        </form>

        <nav className='mt-4 text-center text-neutral-500'>
          <Link
            className='block text-sm hover:text-neutral-800 hover:underline hover:underline-offset-2'
            to='/register'
          >
            ¿No tienes cuenta? Regístrate
          </Link>
          <Link
            className='text-sm hover:text-neutral-800 hover:underline hover:underline-offset-2'
            to='/forgot-password'
          >
            Olvidé mi contraseña
          </Link>
        </nav>
      </div>
    </>
  );
}
