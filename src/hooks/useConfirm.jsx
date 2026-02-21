import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

import { axiosClient } from '@/config/axios';

export function useConfirm() {
  const [accountConfirmed, setAccountConfirmed] = useState(false);

  const { token } = useParams();

  useEffect(() => {
    async function confirmAccount() {
      try {
        const URL = `/veterinarians/confirm/${token}`;
        const { data } = await axiosClient(URL);

        toast.success(data.msg);
        setAccountConfirmed(true);
      } catch (error) {
        toast.error(error?.response?.data?.msg || 'Unexpected error');
      }
    }

    confirmAccount();
  }, [token]);

  return { accountConfirmed };
}
