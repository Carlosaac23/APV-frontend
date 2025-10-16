import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import usePatients from '@/hooks/usePatients';

export default function Form() {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [id, setId] = useState<string | null>(null);

  const { savePatient, patient } = usePatients() as any;

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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
  }

  return (
    <>
      <p className='mt-4 text-center text-lg font-bold'>Añade tus pacientes</p>
      <form
        onSubmit={handleSubmit}
        className='mx-4 mt-6 rounded-md border border-neutral-300 p-4 shadow-sm'
      >
        <div className='mb-4'>
          <label
            htmlFor='paciente'
            className='mb-1 block text-sm font-medium text-neutral-700'
          >
            Nombre paciente
          </label>
          <input
            id='paciente'
            type='text'
            placeholder='Nombre del paciente'
            className='w-full rounded-md border border-neutral-300 bg-neutral-100 p-1 pl-2 inset-shadow-xs placeholder:text-sm focus:border-sky-500 focus:outline-none'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='propietario'
            className='mb-1 block text-sm font-medium text-neutral-700'
          >
            Nombre Propietario
          </label>
          <input
            id='propietario'
            type='text'
            placeholder='Nombre del propietario'
            className='w-full rounded-md border border-neutral-300 bg-neutral-100 p-1 pl-2 inset-shadow-xs placeholder:text-sm focus:border-sky-500 focus:outline-none'
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='email'
            className='mb-1 block text-sm font-medium text-neutral-700'
          >
            Correo eléctronico
          </label>
          <input
            id='email'
            type='text'
            placeholder='johndoe@hotmail.com'
            className='w-full rounded-md border border-neutral-300 bg-neutral-100 p-1 pl-2 inset-shadow-xs placeholder:text-sm focus:border-sky-500 focus:outline-none'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='date'
            className='mb-1 block text-sm font-medium text-neutral-700'
          >
            Fecha de alta
          </label>
          <input
            id='date'
            type='date'
            className='w-full rounded-md border border-neutral-300 bg-neutral-100 p-1 pl-2 inset-shadow-xs focus:border-sky-500 focus:outline-none'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor='symptoms'
            className='mb-1 block text-sm font-medium text-neutral-700'
          >
            Síntomas
          </label>
          <textarea
            id='symptoms'
            placeholder='Describe los síntomas...'
            className='w-full rounded-md border border-neutral-300 bg-neutral-100 p-1 pl-2 inset-shadow-xs placeholder:text-sm focus:border-sky-500 focus:outline-none'
            rows={5}
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          ></textarea>
        </div>

        <input
          type='submit'
          value={id ? 'Guardar Cambios' : 'Agregar Paciente'}
          className='mt-4 w-full rounded-md bg-sky-500 py-2 text-neutral-50 shadow-sm transition-transform duration-150 ease-out hover:cursor-pointer hover:bg-sky-600 active:scale-97'
        />
      </form>
    </>
  );
}
