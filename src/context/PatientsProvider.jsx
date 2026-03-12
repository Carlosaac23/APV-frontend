import { createContext, useState, useEffect, useContext } from 'react';
import { toast } from 'sonner';

import { axiosClient } from '@/config/axios';

const PatientsContext = createContext();

export function PatientsProvider({ children }) {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    async function getPatients() {
      try {
        const token = localStorage.getItem('apv_token');

        if (!token) return;

        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
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
    const token = localStorage.getItem('apv_token');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };

    // If patient has an ID, it means the patient is being updated
    if (patient.id) {
      try {
        const { data } = await axiosClient.put(
          `/patients/${patient.id}`,
          patient,
          config
        );

        const updatedPatients = patients.map(patientState =>
          patientState._id === patient.id
            ? { ...patientState, ...data }
            : patientState
        );

        setPatients(updatedPatients);
        toast.success(data?.msg);
      } catch (error) {
        console.error(error);
      }

      return;
    }

    // If not, it means the patient is being added
    try {
      const { data } = await axiosClient.post('/patients', patient, config);

      setPatients([data.patient, ...patients]);
      toast.success(data?.msg);
    } catch (error) {
      console.error(error);
    }
  }

  function editPatient(patient) {
    setPatient(patient);
  }

  <div className='bg-sky-50'></div>;

  function deletePatient(patientId) {
    toast.info('Are you sure you want to delete this patient?', {
      actionButtonStyle: {
        backgroundColor: 'oklch(70.4% 0.191 22.216)',
        fontWeight: 'bold'
      },
      cancelButtonStyle: {
        backgroundColor: 'oklch(74.6% 0.16 232.661)',
        color: 'white',
        fontWeight: 'bold'
      },
      style: {
        backgroundColor: 'oklch(97.7% 0.013 236.62)',
        color: 'oklch(74.6% 0.16 232.661)'
      },
      action: {
        label: 'Yes',
        onClick: () => confirmDelete(patientId)
      },
      cancel: {
        label: 'No',
        onClick: () => toast.dismiss()
      }
    });
  }

  async function confirmDelete(patientId) {
    try {
      const token = localStorage.getItem('apv_token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      const { data } = await axiosClient.delete(
        `/patients/${patientId}`,
        config
      );

      const updatedPatients = patients.filter(
        patientState => patientState._id !== patientId
      );
      setPatients(updatedPatients);
      return toast.success(data?.msg);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <PatientsContext.Provider
      value={{ patients, savePatient, editPatient, patient, deletePatient }}
    >
      {children}
    </PatientsContext.Provider>
  );
}

export function usePatients() {
  return useContext(PatientsContext);
}
