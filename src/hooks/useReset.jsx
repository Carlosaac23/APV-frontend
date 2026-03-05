import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

import { axiosClient } from '@/config/axios';

export function useReset() {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [validToken, setValidToken] = useState(false);
  const [modifiedPassword, setModifiedPassword] = useState(false);

  useEffect(() => {
    async function verifyToken() {
      try {
        await axiosClient(`/veterinarians/forgot-password/${token}`);
        toast.success('Enter your new password');
        setValidToken(true);
      } catch (error) {
        console.error(error);
        toast.error('There was an error with the link');
      }
    }

    verifyToken();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    try {
      const URL = `/veterinarians/forgot-password/${token}`;
      const { data } = await axiosClient.post(URL, { password });

      toast.success(data?.msg);
      setPassword('');
      setModifiedPassword(true);
    } catch (error) {
      toast.error(error?.response?.data?.msg || 'Unexpected error');
    }
  }

  return { password, setPassword, validToken, modifiedPassword, handleSubmit };
}
