import { Eye, EyeClosed } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Link } from 'react-router-dom';

import { useLogin } from '@/hooks/useLogin';
import { useVisibility } from '@/hooks/useVisibility';

export default function Login() {
  const { toggleVisibility, changeVisibility } = useVisibility();
  const { email, setEmail, password, setPassword, handleSubmit } = useLogin();

  return (
    <section className='mt-10'>
      <div>
        <h1 className='mx-6 text-center text-3xl font-black text-sky-400 capitalize md:text-5xl lg:text-6xl'>
          Log-in and manage your <span className='text-sky-950'>patients</span>
        </h1>
      </div>
      <div className='mx-auto mt-10 max-w-150 rounded-xl border border-gray-200 bg-white p-6 shadow-sm max-sm:mx-6 lg:mt-15'>
        <form onSubmit={handleSubmit}>
          <div className='my-5'>
            <label
              className='mb-3 block text-xl font-bold text-sky-800 uppercase'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='w-full rounded-xl border border-gray-200 bg-gray-50 p-3 shadow-xs placeholder:text-sm placeholder:text-gray-500 focus:outline-2 focus:outline-offset-2 focus:outline-sky-300 focus:outline-solid'
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className='relative my-5'>
            <label
              className='mb-3 block text-xl font-bold text-sky-800 uppercase'
              htmlFor='password'
            >
              Password
            </label>
            <input
              className='w-full rounded-xl border border-gray-200 bg-gray-50 p-3 shadow-xs placeholder:text-sm placeholder:text-gray-500 focus:outline-2 focus:outline-offset-2 focus:outline-sky-300 focus:outline-solid'
              type={toggleVisibility}
              name='password'
              id='password'
              placeholder='Enter your password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button type='button' onClick={changeVisibility}>
              <AnimatePresence mode='popLayout' initial={false}>
                <motion.div
                  key={toggleVisibility === 'password' ? 'password' : 'text'}
                  initial={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
                  transition={{
                    type: 'spring',
                    duration: 0.2,
                    bounce: 0
                  }}
                  className='absolute top-1/2 right-3 cursor-pointer rounded-full p-2 hover:bg-neutral-200'
                >
                  {toggleVisibility === 'password' ? <EyeClosed /> : <Eye />}
                </motion.div>
              </AnimatePresence>
            </button>
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
            className='mt-4 block text-center text-sm text-gray-500 hover:underline hover:underline-offset-2'
            to='/register'
          >
            Don't have an account? Register
          </Link>
          <Link
            className='mt-4 block text-center text-sm text-gray-500 hover:underline hover:underline-offset-2'
            to='/forgot-password'
          >
            I forgot my password
          </Link>
        </nav>
      </div>
    </section>
  );
}
