import { useState } from 'react';
import { toast } from 'sonner';

import axiosClient from '@/config/axios';

export function useRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    if ([name, email, password, confirmPassword].includes('')) {
      return toast.warning('Hay campos vacíos');
    }

    if (password !== confirmPassword) {
      return toast.error('Las contraseñas no coinciden.');
    }

    if (password.length < 6) {
      return toast.warning('La contraseña es muy corta');
    }

    try {
      await axiosClient.post('/veterinarians', { name, email, password });
      toast.success('Cuenta creada exitosamente. Revisa tu correo.');
    } catch (error) {
      toast.error(error.response?.data?.msg || 'Error de servidor');
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleSubmit,
  };
}
