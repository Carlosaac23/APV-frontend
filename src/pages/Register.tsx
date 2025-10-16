import { useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'sonner';
import axiosClient from '@/config/axios';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if ([name, email, password, confirmPassword].includes('')) {
      return toast.warning('Hay campos vacíos');
    }

    if (password !== confirmPassword) {
      return toast.error('Las contraseñas no coinciden.');
    }

    if (password.length < 6) {
      return toast.warning('La contraseña es muy corta');
    }

    try {
      await axiosClient.post('/veterinarians', { name, email, password });
      toast.success('Cuenta creada exitosamente. Revisa tu correo.');
    } catch (error: any) {
      toast.error(error.response?.data?.msg || 'Error de servidor');
    }
  }

  return (
    <>
      <div className='flex flex-col items-center'>
        <h2 className='my-6 text-center text-4xl font-black text-balance text-sky-500'>
          Crea Tu Cuenta
        </h2>

        <img alt='Vet logo' className='hidden w-40 md:block' src='/vet.svg' />
      </div>

      <div className='mx-auto mt-10 max-w-[85%] rounded-md border border-neutral-300 p-4 shadow-sm md:mx-0 md:max-w-[85%]'>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              className='mb-1 block text-sm font-medium text-neutral-700'
              htmlFor='name'
            >
              Nombre
            </label>
            <input
              className='w-full rounded-md border border-neutral-300 bg-neutral-100 p-1 pl-2 inset-shadow-xs placeholder:text-sm focus:border-sky-500 focus:outline-none'
              id='name'
              onChange={(e) => setName(e.target.value)}
              placeholder='John Doe'
              type='text'
              value={name}
            />
          </div>

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

            <div className='mt-2 grid grid-cols-2 grid-rows-2 justify-between'>
              <span className='text-xs text-neutral-500'>
                6 carácteres mínimo
              </span>
              <span className='text-xs text-neutral-500'>
                Usa mayúsculas (A-Z)
              </span>
              <span className='text-xs text-neutral-500'>
                Usa números (1-9)
              </span>
              <span className='text-xs text-neutral-500'>
                Usa caracteres especiales
              </span>
            </div>
          </div>

          <div className='mb-4'>
            <label
              className='mb-1 block text-sm font-medium text-neutral-700'
              htmlFor='confirm-password'
            >
              Confirmar Contraseña
            </label>
            <input
              className='w-full rounded-md border border-neutral-300 bg-neutral-100 p-1 pl-2 inset-shadow-xs placeholder:text-sm focus:border-sky-500 focus:outline-none'
              id='confirm-password'
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='password123'
              type='password'
              value={confirmPassword}
            />
          </div>

          <input
            className='mt-4 w-full rounded-md bg-sky-500 py-2 text-neutral-50 shadow-sm transition-transform duration-150 ease-out hover:cursor-pointer hover:bg-sky-600 active:scale-97'
            type='submit'
            value='Crear Cuenta'
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
            to='/forgot-password'
          >
            Olvidé mi contraseña
          </Link>
        </nav>
      </div>
    </>
  );
}
