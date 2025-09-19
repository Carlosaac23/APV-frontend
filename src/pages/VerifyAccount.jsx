import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { toast } from 'sonner';
import axios from 'axios';

export default function VerifyAccount() {
  const { VITE_BACKEND_URL } = import.meta.env;
  const [accountConfirmed, setAccountConfirmed] = useState(false);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const verifyAccount = async () => {
      try {
        const url = `${VITE_BACKEND_URL}/api/veterinarians/verify/${token}`;
        const { data } = await axios(url);

        toast.success(data.msg);
        setAccountConfirmed(true);
      } catch (error) {
        toast.error(error.response.data.msg);
      }

      setLoading(false);
    };

    verifyAccount();
  }, [token, VITE_BACKEND_URL]);

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
