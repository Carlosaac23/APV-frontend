import { useState, useEffect, createContext } from 'react';
import { toast } from 'sonner';
import axiosClient from '@/config/axios';

const PatientsContext = createContext();

export function PatientsProvider({ children }) {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    async function getPatients() {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;

        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await axiosClient('/patients', config);
        setPatients(data);
      } catch (error) {
        console.error(error);
      }
    }

    getPatients();
  }, []);

  async function savePatient(patient) {
    try {
      const token = localStorage.getItem('token');

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axiosClient.post('/patients', patient, config);
      const { createdAt, updatedAt, __v, ...storedPatient } = data;
      setPatients([storedPatient, ...patients]);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }

  return (
    <PatientsContext.Provider value={{ patients, savePatient }}>
      {children}
    </PatientsContext.Provider>
  );
}

export default PatientsContext;
