import { useState, useEffect, createContext, ReactElement } from 'react';
import { toast } from 'sonner';
import type { PatientType } from '@/types/patient';
import axiosClient from '@/config/axios';

interface ChildrenProps {
  children: ReactElement;
}

interface PatientsContextProps {
  auth: {};
  patients: PatientType[];
  savePatient: (patient: PatientType) => Promise<void>;
  setEdition: (patient: PatientType) => void;
  patient: PatientType | {};
  deletePatient: (id: string) => Promise<void>;
}

const AuthContext = createContext<PatientsContextProps | null>(null);

export function AuthProvider({ children }: ChildrenProps) {
  console.log(children);
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
      } catch (error: any) {
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

  async function updateProfile(userData: PatientType) {
    console.log(userData);
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
    } catch (error: any) {
      return toast.error(error.response.data.msg);
    }
  }

  async function savePassword(userData: PatientType) {
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
      console.log(data);
      return toast.success(data.msg);
    } catch (error: any) {
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
