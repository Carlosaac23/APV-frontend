import { useState } from 'react';
import { toast } from 'sonner';

import { axiosClient } from '@/config/axios';

export function useRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = e => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if ([name, email, password, confirmPassword].includes('')) {
      toast.error('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('The passwords do not match.');
      return;
    }

    if (password.length < 6) {
      toast.error(
        'The password is very short. It must be longer than 6 characters.'
      );
      return;
    }

    try {
      const { data } = await axiosClient.post('/veterinarians', {
        name,
        email,
        password,
      });

      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      toast.success(data?.msg);
    } catch (error) {
      toast.error(error?.response?.data?.msg || 'Unexpected error');
    }
  };

  return {
    name,
    handleNameChange,
    email,
    handleEmailChange,
    password,
    handlePasswordChange,
    confirmPassword,
    handleConfirmPasswordChange,
    handleSubmit,
  };
}
