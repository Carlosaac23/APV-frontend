import { Link } from 'react-router';
import { useState } from 'react';
import { toast } from 'sonner';
import axios from 'axios';
import Footer from '@/components/Footer';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const { VITE_BACKEND_URL } = import.meta.env;

    if ([name, email, password, confirmPassword].includes('')) {
      return toast.warning('Hay campos vacíos');
    }

    if (password !== confirmPassword) {
      return toast.error('Las contraseñas no son las mismas');
    }

    if (password.length < 6) {
      return toast.warning('La contraseña es muy corta');
    }

    try {
      const url = `${VITE_BACKEND_URL}/api/veterinarians`;
      await axios.post(url, { name, email, password });
      toast.success('Cuenta creada exitosamente. Revisa tu correo.');
    } catch (error) {
      if (error) {
        toast.error(error.response.data.msg);
      }
    }
  }

  return (
    <>
      <div>
        <h2 className='my-6 text-center text-4xl font-black text-balance text-sky-500'>
          Crea Tu Cuenta
        </h2>
      </div>

      <div className='mt-10 rounded-md border border-neutral-300 p-4 shadow-sm'>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='mb-1 block text-sm font-medium text-neutral-700'>
              Nombre
            </label>
            <input
              type='text'
              className='w-full rounded-md border border-neutral-300 bg-neutral-100 p-1 pl-2 inset-shadow-xs placeholder:text-sm focus:border-sky-500 focus:outline-none'
              placeholder='John Doe'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='mb-4'>
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

          <div className='mb-4'>
            <label className='mb-1 block text-sm font-medium text-neutral-700'>
              Contraseña
            </label>
            <input
              type='password'
              className='w-full rounded-md border border-neutral-300 bg-neutral-100 p-1 pl-2 inset-shadow-xs placeholder:text-sm focus:border-sky-500 focus:outline-none'
              placeholder='password123'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <label className='mb-1 block text-sm font-medium text-neutral-700'>
              Confirmar Contraseña
            </label>
            <input
              type='password'
              className='w-full rounded-md border border-neutral-300 bg-neutral-100 p-1 pl-2 inset-shadow-xs placeholder:text-sm focus:border-sky-500 focus:outline-none'
              placeholder='password123'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <input
            type='submit'
            value='Crear Cuenta'
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
