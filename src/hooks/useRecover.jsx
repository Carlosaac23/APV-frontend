import { useState } from 'react';
import { toast } from 'sonner';

import { axiosClient } from '@/config/axios';

export function useRecover() {
  const [email, setEmail] = useState('');

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (email === '') {
      toast.error('You must enter a valid email.');
      return;
    }

    try {
      const { data } = await axiosClient.post(
        '/veterinarians/forgot-password',
        { email }
      );

      setEmail('');

      toast.success(data.msg);
    } catch (error) {
      toast.error(error?.response?.data?.msg || 'Unexpected error');
    }
  };

  return { email, handleEmailChange, handleSubmit };
}
