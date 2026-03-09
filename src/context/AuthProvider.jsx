import { useState, createContext, useEffect, useContext } from 'react';
import { toast } from 'sonner';

import { axiosClient } from '@/config/axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState({});

  async function authUser() {
    const token = localStorage.getItem('apv_token');

    if (!token) {
      setAuth({});
      setLoading(false);
      return;
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };

    try {
      const { data } = await axiosClient('/veterinarians/profile', config);
      setAuth(data);
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      setAuth({});
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    authUser();
  }, []);

  function logout() {
    localStorage.removeItem('apv_token');
    setAuth({});
  }

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, loading, setLoading, authUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
