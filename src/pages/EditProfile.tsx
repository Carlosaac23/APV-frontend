import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import AdminNav from '@/components/AdminNav';
import useAuth from '@/hooks/useAuth';

interface ProfileContextProps {
  name: string;
  email: string;
  phone: string;
  web: string;
}

export default function EditProfile() {
  const { auth, updateProfile } = useAuth();

  const [profile, setProfile] = useState<ProfileContextProps>({});

  useEffect(() => {
    setProfile(auth);
  }, [auth]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { name, email, phone, web } = profile;

    if ([name, email].includes('')) {
      return toast.warning('El nombre y correo son obligatorios.');
    }

    updateProfile(profile);
    setProfile({
      name: '',
      email: '',
      phone: '',
      web: '',
    });
  }

  return (
    <>
      <AdminNav />
      <h2 className='mt-4 text-center text-xl font-bold text-sky-500'>
        Editar Perfil
      </h2>
      <p className='text-center'>Modifica tu información aquí</p>

      <div className='mx-4 mt-6 rounded-md border border-neutral-300 p-4 shadow-sm'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label
              className='mb-1 block text-sm font-medium text-neutral-700'
              htmlFor='name'
            >
              Nombre
            </label>
            <input
              className='w-full rounded-md border border-neutral-300 bg-neutral-100 p-1 pl-2 inset-shadow-xs placeholder:text-sm focus:border-sky-500 focus:outline-none'
              placeholder='John Doe'
              type='text'
              name='name'
              id='name'
              value={profile.name || ''}
              onChange={(e) =>
                setProfile({ ...profile, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div className='mb-3'>
            <label
              className='mb-1 block text-sm font-medium text-neutral-700'
              htmlFor='email'
            >
              Correo eléctronico
            </label>
            <input
              className='w-full rounded-md border border-neutral-300 bg-neutral-100 p-1 pl-2 inset-shadow-xs placeholder:text-sm focus:border-sky-500 focus:outline-none'
              placeholder='johndoe@hotmail.com'
              type='email'
              name='email'
              id='email'
              value={profile.email || ''}
              onChange={(e) =>
                setProfile({ ...profile, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div className='mb-3'>
            <label
              className='mb-1 block text-sm font-medium text-neutral-700'
              htmlFor='phone'
            >
              Telefóno
            </label>
            <input
              className='w-full rounded-md border border-neutral-300 bg-neutral-100 p-1 pl-2 inset-shadow-xs placeholder:text-sm focus:border-sky-500 focus:outline-none'
              placeholder='1645 18451687'
              type='tel'
              name='phone'
              id='phone'
              value={profile.phone || ''}
              onChange={(e) =>
                setProfile({ ...profile, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div className='mb-3'>
            <label
              className='mb-1 block text-sm font-medium text-neutral-700'
              htmlFor='web'
            >
              Sitio web
            </label>
            <input
              className='w-full rounded-md border border-neutral-300 bg-neutral-100 p-1 pl-2 inset-shadow-xs placeholder:text-sm focus:border-sky-500 focus:outline-none'
              placeholder='www.misitioweb.com'
              type='text'
              name='web'
              id='web'
              value={profile.web || ''}
              onChange={(e) =>
                setProfile({ ...profile, [e.target.name]: e.target.value })
              }
            />
          </div>

          <input
            type='submit'
            value='Guardar Cambios'
            className='mt-4 w-full rounded-md bg-sky-500 py-2 text-neutral-50 shadow-sm transition-transform duration-150 ease-out hover:cursor-pointer hover:bg-sky-600 active:scale-97'
          />
        </form>
      </div>
    </>
  );
}
