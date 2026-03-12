import { usePatients } from '@/context/PatientsProvider';
import { formatDate } from '@/helpers/formatDate';

export default function Patient({ patient }) {
  const { _id, name, owner, email, discharged, symptoms } = patient;
  const { editPatient, deletePatient } = usePatients();

  return (
    <div className='mx-6 mb-6 max-w-250 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow duration-150 ease-out hover:shadow-lg max-sm:mx-6'>
      <p className='mb-1 font-semibold text-sky-800'>
        Name: <span className='font-normal text-black'>{name}</span>
      </p>
      <p className='mb-1 font-semibold text-sky-800'>
        Owner: <span className='font-normal text-black'>{owner}</span>
      </p>
      <p className='mb-1 font-semibold text-sky-800'>
        Email: <span className='font-normal text-black'>{email}</span>
      </p>
      <p className='mb-1 font-semibold text-sky-800'>
        Discharged:{' '}
        <span className='font-normal text-black'>{formatDate(discharged)}</span>
      </p>
      <p className='mb-1 font-semibold text-sky-800'>
        Symptoms: <span className='font-normal text-black'>{symptoms}</span>
      </p>

      <div className='mt-4 flex gap-4'>
        <button
          className='rounded-md bg-sky-400 px-5 py-1 font-bold text-sky-50 uppercase shadow-sm transition-transform duration-150 ease-out hover:cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-sky-300 active:scale-97 md:w-auto'
          type='button'
          onClick={() => editPatient(patient)}
        >
          Edit
        </button>
        <button
          className='rounded-md bg-red-400 px-5 py-1 font-bold text-red-50 uppercase shadow-sm transition-transform duration-150 ease-out hover:cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-red-300 focus:outline-dashed active:scale-97 md:w-auto'
          type='button'
          onClick={() => deletePatient(_id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
