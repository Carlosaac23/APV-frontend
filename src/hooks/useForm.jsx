import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import { usePatients } from '@/context/PatientsProvider';

export function useForm() {
  const [id, setId] = useState(null);
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [discharged, setDischarged] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const { savePatient, patient } = usePatients();
  console.log('Patient:', patient);

  useEffect(() => {
    if (patient?.name) {
      setId(patient._id);
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setDischarged(patient.discharged);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      name === '' ||
      owner === '' ||
      email === '' ||
      discharged === '' ||
      symptoms === ''
    ) {
      toast.error('All fields are required');
      return;
    }

    savePatient({ id, name, owner, email, discharged, symptoms });

    setId(null);
    setName('');
    setOwner('');
    setEmail('');
    setDischarged('');
    setSymptoms('');
  }

  return {
    id,
    name,
    setName,
    owner,
    setOwner,
    email,
    setEmail,
    discharged,
    setDischarged,
    symptoms,
    setSymptoms,
    handleSubmit
  };
}
