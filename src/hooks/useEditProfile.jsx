import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import { useAuth } from '@/context/AuthProvider';

export function useEditProfile() {
  const [profile, setProfile] = useState({});
  const { auth, updateProfile } = useAuth();

  useEffect(() => {
    setProfile(auth);
  }, [auth]);

  async function handleSubmit(e) {
    e.preventDefault();
    const { name, email } = profile;

    if ([name, email].includes('')) {
      toast.error('Name and Email fields are required');
      return;
    }

    await updateProfile(profile);
  }

  return { profile, setProfile, handleSubmit };
}
