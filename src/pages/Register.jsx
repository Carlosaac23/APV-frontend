import { Link } from 'react-router-dom';

import { useRegister } from '@/hooks/useRegister';

export default function Register() {
  const {
    name,
    handleNameChange,
    email,
    handleEmailChange,
    password,
    handlePasswordChange,
    confirmPassword,
    handleConfirmPasswordChange,
  } = useRegister();

  return (
    <>
      <div>
        <h1 className='text-6xl font-black text-sky-400 capitalize'>
          Create your account and manage{' '}
          <span className='text-sky-950'>your patients</span>
        </h1>
      </div>
      <div className='mt-20 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:mt-5'>
        <form>
          <div className='my-5'>
            <label
              className='mb-3 block text-xl font-bold text-sky-800 uppercase'
              htmlFor='name'
            >
              Name
            </label>
            <input
              className='w-full rounded-xl border border-gray-200 bg-gray-50 p-3 placeholder:text-sm placeholder:text-gray-500'
              type='text'
              name='name'
              id='name'
              placeholder='Enter your name'
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className='my-5'>
            <label
              className='mb-3 block text-xl font-bold text-sky-800 uppercase'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='w-full rounded-xl border border-gray-200 bg-gray-50 p-3 placeholder:text-sm placeholder:text-gray-500'
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email'
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className='my-5'>
            <label
              className='mb-3 block text-xl font-bold text-sky-800 uppercase'
              htmlFor='password'
            >
              Password
            </label>
            <input
              className='w-full rounded-xl border border-gray-200 bg-gray-50 p-3 placeholder:text-sm placeholder:text-gray-500'
              type='password'
              name='password'
              id='password'
              placeholder='Enter your password'
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className='my-5'>
            <label
              className='mb-3 block text-xl font-bold text-sky-800 uppercase'
              htmlFor='confirm-password'
            >
              Confirm password
            </label>
            <input
              className='w-full rounded-xl border border-gray-200 bg-gray-50 p-3 placeholder:text-sm placeholder:text-gray-500'
              type='password'
              name='confirm-password'
              id='confirm-password'
              placeholder='Enter your password'
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          <button
            className='mt-2 w-full rounded-xl bg-sky-400 px-10 py-3 font-bold text-sky-50 uppercase shadow-sm hover:cursor-pointer md:w-auto'
            type='submit'
          >
            Sign up
          </button>
        </form>

        <nav className='mt-10 lg:flex lg:justify-between'>
          <Link
            className='my-4 block text-center text-sm text-gray-500 hover:underline hover:underline-offset-2'
            to='/'
          >
            Already have an account? Sign up
          </Link>
          <Link
            className='my-4 block text-center text-sm text-gray-500 hover:underline hover:underline-offset-2'
            to='/forgot-password'
          >
            I forgot my password
          </Link>
        </nav>
      </div>
    </>
  );
}
