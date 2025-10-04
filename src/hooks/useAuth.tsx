import { useContext } from 'react';
import AuthContext from '@/context/AuthProvider';

interface AuthState {
  auth: any;
  loading: boolean;
}

export default function useAuth(): AuthState {
  return useContext(AuthContext);
}
