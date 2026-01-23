import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { toast } from 'sonner';

import axiosClient from '@/config/axios';

export function useVerify() {
  const { VITE_BACKEND_URL } = import.meta.env;
  const [accountConfirmed, setAccountConfirmed] = useState(false);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const verifyAccount = async () => {
      try {
        const url = `/veterinarians/verify/${token}`;
        const { data } = await axiosClient(url);

        toast.success(data.msg);
        setAccountConfirmed(true);
      } catch (error) {
        toast.error(error.response?.data?.msg || 'Error de autenticación');
      }

      setLoading(false);
    };

    verifyAccount();
  }, [token, VITE_BACKEND_URL]);

  return { accountConfirmed, loading };
}
