import { useState, useEffect, createContext } from 'react';
import { toast } from 'sonner';
import axiosClient from '@/config/axios';

const PatientsContext = createContext();

export function PatientsProvider({ children }) {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

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
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    if (patient.id) {
      try {
        const { data } = await axiosClient.put(
          `/patients/${patient.id}`,
          patient,
          config,
        );

        const updatedPatients = patients.map((statePatient) =>
          statePatient._id === data._id ? data : statePatient,
        );
        setPatients(updatedPatients);
        toast.success('Holaaaaa');
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const { data } = await axiosClient.post('/patients', patient, config);
        const { createdAt, updatedAt, __v, ...storedPatient } = data;
        setPatients([storedPatient, ...patients]);
      } catch (error) {
        toast.error(error.response.data.msg);
      }
    }
  }

  function setEdition(patient) {
    setPatient(patient);
  }

  async function deletePatient(id) {
    const confirmMsg = confirm('¿Seguro que quieres eliminar este paciente?');
    if (confirmMsg) {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await axiosClient.delete(`/patients/${id}`, config);
        const updatedPatients = patients.filter(
          (statePatients) => statePatients._id !== id,
        );
        setPatients(updatedPatients);
        toast.info('Paciente eliminado');
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <PatientsContext.Provider
      value={{ patients, savePatient, setEdition, patient, deletePatient }}
    >
      {children}
    </PatientsContext.Provider>
  );
}

export default PatientsContext;
