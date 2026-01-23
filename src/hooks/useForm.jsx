import { useState, useEffect } from 'react';
import { toast } from 'sonner';

import usePatients from './usePatients';

export function useForm() {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [id, setId] = useState(null);

  const { savePatient, patient } = usePatients();

  useEffect(() => {
    if (patient?.name) {
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setDate(new Date(patient.date).toLocaleDateString('es-CO'));
      setSymptoms(patient.symptoms);
      setId(patient._id);
    }
  }, [patient]);

  const handleSubmit = e => {
    e.preventDefault();

    if ([name, owner, email, date, symptoms].includes('')) {
      return toast.warning('Todos los campos son obligatorios.');
    }

    savePatient({
      name,
      owner,
      email,
      date,
      symptoms,
      id,
    });
    toast.success('Paciente agregado exitosamente.');
    setName('');
    setOwner('');
    setEmail('');
    setDate('');
    setSymptoms('');
    setId('');
  };

  return {
    name,
    setName,
    owner,
    setOwner,
    email,
    setEmail,
    date,
    setDate,
    symptoms,
    setSymptoms,
    handleSubmit,
    id,
  };
}
