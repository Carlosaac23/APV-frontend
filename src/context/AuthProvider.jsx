import { useState, useEffect, createContext } from 'react';
import { toast } from 'sonner';
import axiosClient from '@/config/axios';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const authUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

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
    };

    authUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };

export default AuthContext;
