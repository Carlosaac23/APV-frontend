import { useContext } from 'react';

import AuthContext from '@/context/AuthProvider';

export default function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return {
    auth: context.auth,
    loading: false,
  };
}
