import { useState } from 'react';
import { toast } from 'sonner';
import useAuth from '@/hooks/useAuth';
import AdminNav from '@/components/AdminNav';

export default function ChangePassword() {
  const { savePassword } = useAuth();

  const [password, setPassword] = useState({
    actual_password: '',
    new_password: '',
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (Object.values(password).some((input) => input === '')) {
      return toast.warning('Todos los campos son obligatorios.');
    }

    if (password.actual_password.length < 6) {
      return toast.warning('La contraseña debe tener mínimo 6 caracteres.');
    }

    savePassword(password);
  }

  return (
    <>
      <AdminNav />
      <h2 className='mt-4 text-center text-xl font-bold text-sky-500'>
        Cambiar Contraseña
      </h2>
      <p className='text-center'>Modifica tu contraseña aquí</p>

      <div className='mx-4 mt-6 rounded-md border border-neutral-300 p-4 shadow-sm'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label
              className='mb-1 block text-sm font-medium text-neutral-700'
              htmlFor='name'
            >
              Contraseña Actual
            </label>
            <input
              className='w-full rounded-md border border-neutral-300 bg-neutral-100 p-1 pl-2 inset-shadow-xs placeholder:text-sm focus:border-sky-500 focus:outline-none'
              placeholder='Contraseña actual'
              type='password'
              name='actual_password'
              id='actual_password'
              onChange={(e) =>
                setPassword({
                  ...password,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label
              className='mb-1 block text-sm font-medium text-neutral-700'
              htmlFor='name'
            >
              Nueva contraseña
            </label>
            <input
              className='w-full rounded-md border border-neutral-300 bg-neutral-100 p-1 pl-2 inset-shadow-xs placeholder:text-sm focus:border-sky-500 focus:outline-none'
              placeholder='Nueva contraseña '
              type='password'
              name='new_password'
              id='new_password'
              onChange={(e) =>
                setPassword({
                  ...password,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>

          <div className='mt-2 grid grid-cols-2 grid-rows-2 justify-between'>
            <span className='text-xs text-neutral-500'>
              6 carácteres mínimo
            </span>
            <span className='text-xs text-neutral-500'>
              Usa mayúsculas (A-Z)
            </span>
            <span className='text-xs text-neutral-500'>Usa números (1-9)</span>
            <span className='text-xs text-neutral-500'>
              Usa caracteres especiales
            </span>
          </div>

          <input
            type='submit'
            value='Actualizar Contraseña'
            className='mt-4 w-full rounded-md bg-sky-500 py-2 text-neutral-50 shadow-sm transition-transform duration-150 ease-out hover:cursor-pointer hover:bg-sky-600 active:scale-97'
          />
        </form>
      </div>
    </>
  );
}
