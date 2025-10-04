import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { toast } from 'sonner';
import axiosClient from '@/config/axios';

export default function NewPassword() {
  const [password, setPassword] = useState('');
  const [validToken, setValidToken] = useState(false);
  const [newPassword, setNewPassword] = useState(false);

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await axiosClient(`/veterinarians/forgot-password/${token}`);
        toast.success('Ingresa tu nueva contraseña.');
        setValidToken(true);
      } catch (error: any) {
        toast.error(error.message);
        toast.error('Hubo un error con el enlace.');
      }
    };

    verifyToken();
  }, [token]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (password === '') {
      return toast.error('Debes agregar un contraseña.');
    }

    if (password.length < 6) {
      return toast.warning('La contraseña debe tener mínimo 6 caracteres.');
    }

    try {
      const url = `/veterinarians/forgot-password/${token}`;
      const { data } = await axiosClient.post(url, { password });
      toast.success(data.msg);
      setNewPassword(true);
    } catch (error: any) {
      toast.error(error.message);
      toast.error(error.response.data.msg);
    }
  }

  return (
    <>
      <div>
        <h2 className='my-6 text-center text-4xl font-black text-balance text-sky-500'>
          Restablece Tu Contraseña
        </h2>
      </div>

      <div className='mt-10 rounded-md border border-neutral-300 p-4 shadow-sm'>
        {validToken && (
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor='new-password'
                className='mb-1 block text-sm font-medium text-neutral-700'
              >
                Nueva contraseña
              </label>
              <input
                id='new-password'
                type='password'
                className='w-full rounded-md border border-neutral-300 bg-neutral-100 p-1 pl-2 inset-shadow-xs placeholder:text-sm focus:border-sky-500 focus:outline-none'
                placeholder='Nueva contraseña'
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

            <input
              type='submit'
              value='Guardar Contraseña'
              className='mt-4 w-full rounded-md bg-sky-500 py-2 text-neutral-50 shadow-sm transition-transform duration-150 ease-out hover:cursor-pointer hover:bg-sky-600 active:scale-97'
            />
          </form>
        )}

        {newPassword && (
          <nav className='mt-4 text-center text-neutral-500'>
            <Link
              to='/'
              className='text-sm hover:text-neutral-800 hover:underline hover:underline-offset-2'
            >
              Iniciar Sesión
            </Link>
          </nav>
        )}
      </div>
    </>
  );
}
