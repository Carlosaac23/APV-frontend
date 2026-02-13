import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <div>
        <h1 className='text-6xl font-black text-sky-400 capitalize'>
          Log-in and manage your <span className='text-sky-950'>patients</span>
        </h1>
      </div>
      <div className='mt-20 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:mt-5'>
        <form onSubmit={e => e.preventDefault()}>
          <div className='my-5'>
            <label
              className='mb-3 block text-xl font-bold text-sky-800 uppercase'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='w-full rounded-xl border border-gray-200 bg-gray-50 p-3 placeholder:text-sm placeholder:text-gray-500 focus:outline-2 focus:outline-offset-2 focus:outline-sky-300 focus:outline-solid'
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email'
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
              className='w-full rounded-xl border border-gray-200 bg-gray-50 p-3 placeholder:text-sm placeholder:text-gray-500 focus:outline-2 focus:outline-offset-2 focus:outline-sky-300 focus:outline-solid'
              type='password'
              name='password'
              id='password'
              placeholder='Enter your password'
            />
          </div>
          <button
            className='mt-2 w-full rounded-xl bg-sky-400 px-10 py-3 font-bold text-sky-50 uppercase shadow-sm transition-transform duration-150 ease-out hover:cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-sky-300 focus:outline-solid active:scale-97 md:w-auto'
            type='submit'
          >
            Log in
          </button>
        </form>

        <nav className='mt-10 lg:flex lg:justify-between'>
          <Link
            className='my-4 block text-center text-sm text-gray-500 hover:underline hover:underline-offset-2'
            to='/register'
          >
            Don't have an account? Register
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
