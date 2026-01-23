import { Link } from 'react-router';

import { useVerify } from '@/hooks/useVerify';

export default function VerifyAccount() {
  const { accountConfirmed, loading } = useVerify();

  return (
    <>
      <div>
        <h2 className='my-6 text-center text-4xl font-black text-balance text-sky-500'>
          Confirma Tu Cuenta
        </h2>
      </div>

      <div className='mt-10 rounded-md border border-neutral-300 p-4 text-center shadow-sm'>
        {!loading && accountConfirmed && (
          <Link
            className='text-sm hover:text-neutral-800 hover:underline hover:underline-offset-2'
            to='/'
          >
            Iniciar Sesión
          </Link>
        )}
      </div>
    </>
  );
}
