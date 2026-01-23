import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

import axiosClient from '@/config/axios';

import { useAuth } from './useAuth';

export function useLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    if ([email, password].includes('')) {
      return toast.error('Todos los campos son obligatorios');
    }

    try {
      const { data } = await axiosClient.post('/veterinarians/login', {
        email,
        password,
      });

      localStorage.setItem('token', data.token);
      setAuth(data);
      navigate('/admin');
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return { email, setEmail, password, setPassword, handleSubmit };
}
