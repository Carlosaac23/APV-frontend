import { useState, useEffect } from 'react';
import { toast } from 'sonner';

import InputDiv from '@/components/InputDiv';
import { usePatients } from '@/context/PatientsProvider';

export default function Form() {
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

  return (
    <>
      <h2 className='my-6 text-center font-bold text-sky-400'>
        Add your <span className='text-sky-950'>patients</span>
      </h2>

      <form
        className='mx-6 max-w-150 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm max-sm:mx-6'
        onSubmit={handleSubmit}
      >
        <InputDiv
          type='text'
          name='name'
          placeholder='Hook'
          label='Pet Name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <InputDiv
          type='text'
          name='owner'
          placeholder='John Doe'
          label='Pet Owner'
          value={owner}
          onChange={e => setOwner(e.target.value)}
        />
        <InputDiv
          type='email'
          name='email'
          placeholder='johndoe@hotmail.com'
          label='Owner Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <InputDiv
          type='date'
          name='discharged'
          label='Discharged Date'
          value={discharged}
          onChange={e => setDischarged(e.target.value)}
        />
        <div className='mb-5'>
          <label
            className='mb-2 block text-lg font-bold text-sky-800 uppercase'
            htmlFor='symptoms'
          >
            Pet Symptoms
          </label>
          <textarea
            className='w-full resize-none rounded-xl border border-gray-200 bg-gray-50 p-3 shadow-xs placeholder:text-sm placeholder:text-gray-500 focus:outline-2 focus:outline-offset-2 focus:outline-sky-300 focus:outline-solid'
            name='symptoms'
            id='symptoms'
            placeholder="Don't want to eat..."
            value={symptoms}
            onChange={e => setSymptoms(e.target.value)}
          ></textarea>
        </div>

        <button
          className='mt-2 w-full rounded-xl bg-sky-400 px-10 py-3 font-bold text-sky-50 uppercase shadow-sm transition-transform duration-150 ease-out hover:cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-sky-300 focus:outline-solid active:scale-97 md:w-auto'
          type='submit'
        >
          {id ? 'Save Patient' : 'Add Patient'}
        </button>
      </form>
    </>
  );
}
