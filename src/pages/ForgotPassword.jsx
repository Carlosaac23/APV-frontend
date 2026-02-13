import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <>
      <div>
        <h1 className='text-6xl font-black text-sky-400 capitalize'>
          Recover your <span className='text-sky-950'>password</span>
        </h1>
      </div>
      <div className='mt-20 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:mt-5'>
        <form>
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
            />
          </div>
          <button
            className='mt-2 w-full rounded-xl bg-sky-400 px-10 py-3 font-bold text-sky-50 uppercase shadow-sm hover:cursor-pointer md:w-auto'
            type='submit'
          >
            Recover password
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
            to='/'
          >
            Already have an account? Sign in
          </Link>
        </nav>
      </div>
    </>
  );
}
