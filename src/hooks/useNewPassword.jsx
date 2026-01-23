import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { toast } from 'sonner';

import axiosClient from '@/config/axios';

export function useNewPassword() {
  const [password, setPassword] = useState('');
  const [validToken, setValidToken] = useState(false);
  const [newPassword, setNewPassword] = useState(false);

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await axiosClient(`/veterinarians/forgot-password/${token}`);
        toast.success('Ingresa tu nueva contraseña.');
        setValidToken(true);
      } catch (error) {
        toast.error(error.message);
        toast.error('Hubo un error con el enlace.');
      }
    };

    verifyToken();
  }, [token]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (password === '') {
      return toast.error('Debes agregar un contraseña.');
    }

    if (password.length < 6) {
      return toast.warning('La contraseña debe tener mínimo 6 caracteres.');
    }

    try {
      const url = `/veterinarians/forgot-password/${token}`;
      const { data } = await axiosClient.post(url, { password });
      toast.success(data.msg);
      setNewPassword(true);
    } catch (error) {
      toast.error(error.message);
      toast.error(error.response.data.msg);
    }
  };

  return { password, setPassword, newPassword, validToken, handleSubmit };
}
