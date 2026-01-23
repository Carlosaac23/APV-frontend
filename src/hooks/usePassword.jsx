import { useState } from 'react';
import { toast } from 'sonner';

import { useAuth } from './useAuth';

export function usePassword() {
  const { savePassword } = useAuth();

  const [password, setPassword] = useState({
    actual_password: '',
    new_password: '',
  });

  const handleSubmit = e => {
    e.preventDefault();

    if (Object.values(password).some(input => input === '')) {
      return toast.warning('Todos los campos son obligatorios.');
    }

    if (password.actual_password.length < 6) {
      return toast.warning('La contraseña debe tener mínimo 6 caracteres.');
    }

    savePassword(password);
  };

  return { password, setPassword, handleSubmit };
}
