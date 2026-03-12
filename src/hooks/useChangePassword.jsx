import { useState } from 'react';
import { toast } from 'sonner';

import { useAuth } from '@/context/AuthProvider';

export function useChangePassword() {
  const [password, setPassword] = useState({
    current_password: '',
    new_password: ''
  });
  const { savePassword } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    if (Object.values(password).some(field => field === '')) {
      toast.error('All fields are required');
      return;
    }

    if (password.new_password < 6) {
      toast.warning('Password must be at least 6 characters long');
      return;
    }

    await savePassword(password);
    setPassword({
      current_password: '',
      new_password: ''
    });
  }

  return { password, setPassword, handleSubmit };
}
