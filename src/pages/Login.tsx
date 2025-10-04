import { Link, useNavigate } from 'react-router';
import { toast } from 'sonner';
import { useState } from 'react';
import axiosClient from '@/config/axios';
import useAuth from '@/hooks/useAuth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useAuth();

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
      <div>
        <h2 className='my-6 text-center text-4xl font-black text-balance text-sky-500'>
          Inicia Sesión
        </h2>
      </div>

      <div className='mt-10 rounded-md border border-neutral-300 p-4 shadow-sm'>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='mb-1 block text-sm font-medium text-neutral-700'
            >
              Correo Eléctronico
            </label>
            <input
              id='email'
              type='email'
              className='w-full rounded-md border border-neutral-300 bg-neutral-100 p-1 pl-2 inset-shadow-xs placeholder:text-sm focus:border-sky-500 focus:outline-none'
              placeholder='johndoe@hotmail.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='password'
              className='mb-1 block text-sm font-medium text-neutral-700'
            >
              Contraseña
            </label>
            <input
              id='password'
              type='password'
              className='w-full rounded-md border border-neutral-300 bg-neutral-100 p-1 pl-2 inset-shadow-xs placeholder:text-sm focus:border-sky-500 focus:outline-none'
              placeholder='password123'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            type='submit'
            value='Iniciar Sesión'
            className='shadwow-sm mt-4 w-full rounded-md bg-sky-500 py-2 text-neutral-50 transition-transform duration-150 ease-out hover:cursor-pointer hover:bg-sky-600 active:scale-97'
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
    </>
  );
}
