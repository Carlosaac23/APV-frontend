import { createContext, useState, useEffect, useContext } from 'react';

import { axiosClient } from '@/config/axios';

const PatientsContext = createContext();

export function PatientsProvider({ children }) {
  const [patients, setPatients] = useState([]);

  async function savePatient(patient) {
    console.log(patient);
    const token = localStorage.getItem('apv_token');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };
    try {
      const { data } = await axiosClient.post('/patients', patient, config);
      setPatients([data, ...patients]);
    } catch (error) {
      console.error(error.response);
    }
  }

  return (
    <PatientsContext.Provider value={{ patients, savePatient }}>
      {children}
    </PatientsContext.Provider>
  );
}

export function usePatients() {
  return useContext(PatientsContext);
}
