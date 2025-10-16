import { useEffect, useState } from 'react';
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
  const { auth, updateProfile } = useAuth() as any;

  const [profile, setProfile] = useState<ProfileContextProps>({
    name: '',
    email: '',
    phone: '',
    web: '',
  });

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
              id='name'
              name='name'
              type='text'
              onChange={(e) =>
                setProfile({ ...profile, [e.target.name]: e.target.value })
              }
              placeholder='John Doe'
              value={profile.name || ''}
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
              id='email'
              name='email'
              type='email'
              onChange={(e) =>
                setProfile({ ...profile, [e.target.name]: e.target.value })
              }
              placeholder='johndoe@hotmail.com'
              value={profile.email || ''}
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
              id='phone'
              name='phone'
              type='tel'
              onChange={(e) =>
                setProfile({ ...profile, [e.target.name]: e.target.value })
              }
              placeholder='1645 18451687'
              value={profile.phone || ''}
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
              id='web'
              name='web'
              type='text'
              onChange={(e) =>
                setProfile({ ...profile, [e.target.name]: e.target.value })
              }
              placeholder='www.misitioweb.com'
              value={profile.web || ''}
            />
          </div>

          <input
            className='mt-4 w-full rounded-md bg-sky-500 py-2 text-neutral-50 shadow-sm transition-transform duration-150 ease-out hover:cursor-pointer hover:bg-sky-600 active:scale-97'
            type='submit'
            value='Guardar Cambios'
          />
        </form>
      </div>
    </>
  );
}
