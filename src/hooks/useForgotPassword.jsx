import { useState } from 'react';
import { toast } from 'sonner';

import axiosClient from '@/config/axios';

export function useForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    if (email === '' || email.length < 6) {
      return toast.warning('El email es obligatorio.');
    }

    try {
      const { data } = await axiosClient.post(
        '/veterinarians/forgot-password',
        {
          email,
        }
      );

      toast.success(data.msg);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return { email, setEmail, handleSubmit };
}
