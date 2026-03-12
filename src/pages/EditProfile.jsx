import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import AdminNav from '@/components/AdminNav';
import { useAuth } from '@/context/AuthProvider';

export default function EditProfile() {
  const { auth, updateProfile } = useAuth();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    setProfile(auth);
  }, [auth]);

  async function handleSubmit(e) {
    e.preventDefault();
    const { name, email } = profile;

    if ([name, email].includes('')) {
      toast.error('Name and Email fields are required');
      return;
    }

    await updateProfile(profile);
  }

  return (
    <>
      <AdminNav />
      <h2 className='mt-8 text-center text-2xl font-black md:text-3xl'>
        Edit Profile
      </h2>
      <p className='mt-3 mb-10 text-center md:text-xl'>
        Modify your{' '}
        <span className='font-bold text-sky-400'>information here </span>
      </p>

      <div className='flex justify-center'>
        <div className='mx-6 max-w-150 rounded-xl bg-white p-5 shadow-sm md:w-1/2'>
          <form onSubmit={handleSubmit}>
            <div className='my-3'>
              <label
                className='mb-3 block font-bold text-sky-800 uppercase md:text-xl'
                htmlFor='name'
              >
                Name
              </label>
              <input
                className='w-full rounded-xl border border-gray-200 bg-gray-50 p-3 shadow-xs placeholder:text-sm placeholder:text-gray-500 focus:outline-2 focus:outline-offset-2 focus:outline-sky-300 focus:outline-solid'
                type='text'
                name='name'
                id='name'
                value={profile.name || ''}
                onChange={e =>
                  setProfile({ ...profile, [e.target.name]: e.target.value })
                }
              />
            </div>

            <div className='my-3'>
              <label
                className='mb-3 block font-bold text-sky-800 uppercase md:text-xl'
                htmlFor='web'
              >
                Website
              </label>
              <input
                className='w-full rounded-xl border border-gray-200 bg-gray-50 p-3 shadow-xs placeholder:text-sm placeholder:text-gray-500 focus:outline-2 focus:outline-offset-2 focus:outline-sky-300 focus:outline-solid'
                type='text'
                name='web'
                id='web'
                value={profile.web || ''}
                onChange={e =>
                  setProfile({ ...profile, [e.target.name]: e.target.value })
                }
              />
            </div>

            <div className='my-3'>
              <label
                className='mb-3 block font-bold text-sky-800 uppercase md:text-xl'
                htmlFor='phone'
              >
                Phone
              </label>
              <input
                className='w-full rounded-xl border border-gray-200 bg-gray-50 p-3 shadow-xs placeholder:text-sm placeholder:text-gray-500 focus:outline-2 focus:outline-offset-2 focus:outline-sky-300 focus:outline-solid'
                type='number'
                name='phone'
                id='phone'
                value={profile.phone || ''}
                onChange={e =>
                  setProfile({ ...profile, [e.target.name]: e.target.value })
                }
              />
            </div>

            <div className='my-3'>
              <label
                className='mb-3 block font-bold text-sky-800 uppercase md:text-xl'
                htmlFor='email'
              >
                Email
              </label>
              <input
                className='w-full rounded-xl border border-gray-200 bg-gray-50 p-3 shadow-xs placeholder:text-sm placeholder:text-gray-500 focus:outline-2 focus:outline-offset-2 focus:outline-sky-300 focus:outline-solid'
                type='email'
                name='email'
                id='email'
                value={profile.email || ''}
                onChange={e =>
                  setProfile({ ...profile, [e.target.name]: e.target.value })
                }
              />
            </div>

            <button
              className='mt-2 w-full rounded-xl bg-sky-400 px-10 py-3 font-bold text-sky-50 uppercase shadow-sm transition-transform duration-150 ease-out hover:cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-sky-300 focus:outline-solid active:scale-97 md:w-auto'
              type='submit'
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
