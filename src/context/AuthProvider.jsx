import { useState, useEffect, createContext } from 'react';
import { toast } from 'sonner';
import axiosClient from '@/config/axios';

const AuthContext = createContext();

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
        toast.error(error.response.data.msg);
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

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        loading,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
