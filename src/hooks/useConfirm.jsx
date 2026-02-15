import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

export function useConfirm() {
  const [accountConfirmed, setAccountConfirmed] = useState(false);

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    async function confirmAccount() {
      try {
        const URL = `http://localhost:4000/api/veterinarians/confirm/${token}`;
        const { data } = await axios(URL);

        toast.success(data.msg);
        setAccountConfirmed(true);
      } catch (error) {
        toast.error(error.response.data.msg);
      }
    }

    confirmAccount();
  }, []);

  return { accountConfirmed };
}
