import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import { useAuth } from './useAuth';

export function useProfile() {
  const { auth, updateProfile } = useAuth();

  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    web: '',
  });

  useEffect(() => {
    setProfile(auth);
  }, [auth]);

  const handleSubmit = e => {
    e.preventDefault();

    const { name, email, _phone, _web } = profile;

    if ([name, email].includes('')) {
      return toast.warning('El nombre y correo son obligatorios.');
    }

    updateProfile(profile);
    setProfile({
      name: '',
      email: '',
      phone: '',
      web: '',
    });
  };

  return { profile, setProfile, handleSubmit };
}
