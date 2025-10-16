import { useContext } from 'react';
import AuthContext from '@/context/AuthProvider';

interface AuthState {
  auth: any;
  loading: boolean;
}

export default function useAuth(): AuthState {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return {
    auth: context.auth,
    loading: false,
  };
}
