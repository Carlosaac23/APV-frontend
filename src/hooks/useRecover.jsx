import { useState } from 'react';
import { toast } from 'sonner';

export function useRecover() {
  const [email, setEmail] = useState('');

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (email === '') {
      toast.error('You must enter a valid email.');
      return;
    }

    toast.success('Pasa algo mas...');
  };

  return { email, handleEmailChange, handleSubmit };
}
