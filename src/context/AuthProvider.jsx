import { createContext, useEffect, useState } from 'react';
import { toast } from 'sonner';

import axiosClient from '@/config/axios';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        return setLoading(false);
      }

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await axiosClient('/veterinarians/profile', config);
        setAuth(data);
      } catch (error) {
        toast.error(error.response?.data?.msg || 'Error de autenticación');
        setAuth({});
      }

      setLoading(false);
    };

    authUser();
  }, []);

  function logOut() {
    localStorage.removeItem('token');
    setAuth({});
  }

  async function updateProfile(userData) {
    const token = localStorage.getItem('token');
    if (!token) {
      return setLoading(false);
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const url = `/veterinarians/profile/${userData._id}`;
      const { data } = await axiosClient.put(url, userData, config);
      return toast.success('Datos guardados exitosamente.');
    } catch (error) {
      return toast.error(error.response.data.msg);
    }
  }

  async function savePassword(userData) {
    const token = localStorage.getItem('token');
    if (!token) {
      return setLoading(false);
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const url = '/veterinarians/update-password';
      const { data } = await axiosClient.put(url, userData, config);
      return toast.success(data.msg);
    } catch (error) {
      return toast.error(error.response.data.msg);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        loading,
        logOut,
        updateProfile,
        savePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
