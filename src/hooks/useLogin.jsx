import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { axiosClient } from '@/config/axios';
import { useAuth } from '@/context/AuthProvider';

export function useLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { authUser, setLoading } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    if (email === '') {
      toast.error('Email is required');
      return;
    }
    if (password === '') {
      toast.error('Password is required');
      return;
    }

    try {
      const { data } = await axiosClient.post('/veterinarians/login', {
        email,
        password
      });

      localStorage.setItem('apv_token', data.token);
      setLoading(true);
      await authUser();
      navigate('/admin');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      setLoading(false);
    }
  }

  return { email, setEmail, password, setPassword, handleSubmit };
}
