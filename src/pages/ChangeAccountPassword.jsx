import AdminNav from '@/components/AdminNav';
import VisibilityButton from '@/components/VisibilityButton';
import { useVisibility } from '@/hooks/useVisibility';

export default function ChangeAccountPassword() {
  const { changeVisibility, toggleVisibility } = useVisibility();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <AdminNav />
      <h2 className='mt-8 text-center text-2xl font-black md:text-3xl'>
        Change Password
      </h2>
      <p className='mt-3 mb-10 text-center md:text-xl'>
        Modify your{' '}
        <span className='font-bold text-sky-400'>password here</span>
      </p>

      <div className='flex justify-center'>
        <div className='mx-6 max-w-150 rounded-xl bg-white p-5 shadow-sm md:w-1/2'>
          <form onSubmit={handleSubmit}>
            <div className='relative my-3'>
              <label
                className='mb-3 block font-bold text-sky-800 uppercase md:text-xl'
                htmlFor='name'
              >
                Current Password
              </label>
              <input
                className='w-full rounded-xl border border-gray-200 bg-gray-50 p-3 shadow-xs placeholder:text-sm placeholder:text-gray-500 focus:outline-2 focus:outline-offset-2 focus:outline-sky-300 focus:outline-solid'
                type={toggleVisibility}
                name='password'
                id='password'
                placeholder='Enter your current password'
              />
              <VisibilityButton
                toggleVisibility={toggleVisibility}
                changeVisibility={changeVisibility}
              />
            </div>

            <div className='relative my-3'>
              <label
                className='mb-3 block font-bold text-sky-800 uppercase md:text-xl'
                htmlFor='name'
              >
                New Password
              </label>
              <input
                className='w-full rounded-xl border border-gray-200 bg-gray-50 p-3 shadow-xs placeholder:text-sm placeholder:text-gray-500 focus:outline-2 focus:outline-offset-2 focus:outline-sky-300 focus:outline-solid'
                type={toggleVisibility}
                name='password'
                id='password'
                placeholder='Enter your new password'
              />
              <VisibilityButton
                toggleVisibility={toggleVisibility}
                changeVisibility={changeVisibility}
              />
            </div>

            <button
              className='mt-2 w-full rounded-xl bg-sky-400 px-10 py-3 font-bold text-sky-50 uppercase shadow-sm transition-transform duration-150 ease-out hover:cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-sky-300 focus:outline-solid active:scale-97 md:w-auto'
              type='submit'
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
