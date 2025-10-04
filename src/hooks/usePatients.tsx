import { useContext } from 'react';
import PatientsContext from '@/context/PatientsProvider';

export default function usePatients() {
  return useContext(PatientsContext);
}
