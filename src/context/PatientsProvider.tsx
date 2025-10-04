import { useState, useEffect, createContext, ReactElement } from 'react';
import { toast } from 'sonner';
import type { PatientType } from '@/types/patient';
import axiosClient from '@/config/axios';
import useAuth from '@/hooks/useAuth';

interface ChildrenProps {
  children: ReactElement;
}

interface PatientsContextProps {
  patients: PatientType[];
  savePatient: (patient: PatientType) => Promise<void>;
  setEdition: (patient: PatientType) => void;
  patient: PatientType | {};
  deletePatient: (id: string) => Promise<void>;
}

const PatientsContext = createContext<PatientsContextProps | null>(null);

export function PatientsProvider({ children }: ChildrenProps) {
  const [patients, setPatients] = useState<PatientType[]>([]);
  const [patient, setPatient] = useState<PatientType | {}>({});
  const { auth } = useAuth();

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
  }, [auth]);

  async function savePatient(patient: PatientType) {
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
      } catch (error: any) {
        toast.error(error.response.data.msg);
      }
    }
  }

  function setEdition(patient: PatientType) {
    setPatient(patient);
  }

  async function deletePatient(id: string) {
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
