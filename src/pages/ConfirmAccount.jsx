import { Link } from 'react-router-dom';

import { useConfirm } from '@/hooks/useConfirm';

export default function ConfirmAccount() {
  const { accountConfirmed } = useConfirm();

  return (
    <section className='mt-10'>
      <div>
        <h1 className='mx-6 text-center text-3xl font-black text-sky-400 capitalize md:text-5xl lg:text-6xl'>
          Confirm your <span className='text-sky-950'>account</span>
        </h1>
      </div>
      <div className='mx-auto mt-10 max-w-150 rounded-xl border border-gray-200 bg-white p-6 shadow-sm max-sm:mx-6 lg:mt-15'>
        {accountConfirmed ? (
          <>
            <h2 className='rounded-md border border-green-300 bg-green-50 p-3 text-center text-2xl font-semibold text-green-500'>
              Account successfully confirmed
            </h2>
          </>
        ) : (
          <>
            <h2 className='rounded-md border border-red-300 bg-red-50 p-3 text-center text-2xl font-semibold text-red-500'>
              Invalid token
            </h2>
          </>
        )}

        <nav>
          {accountConfirmed && (
            <Link
              className='my-4 block text-center text-sm text-gray-500 hover:underline hover:underline-offset-2'
              to='/'
            >
              Log in
            </Link>
          )}
        </nav>
      </div>
    </section>
  );
}
