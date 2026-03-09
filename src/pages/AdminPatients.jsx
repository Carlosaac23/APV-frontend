import { useState } from 'react';

import Form from '@/components/Form';
import PatientsList from '@/components/PatientsList';

export default function AdminPatients() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section>
      <div className='flex flex-col md:flex-row'>
        <button
          className='mx-auto mt-6 w-[80%] rounded-xl bg-sky-400 p-2 text-sm font-bold text-sky-50 shadow-sm transition-transform duration-150 ease-out hover:cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-sky-300 focus:outline-solid active:scale-97 md:hidden md:w-auto md:px-6'
          type='button'
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Hide Form' : 'Show Form'}
        </button>
        <div
          className={`${showForm ? 'block' : 'hidden'} md:block md:w-1/2 lg:w-2/5`}
        >
          <Form />
        </div>

        <div className='md:w-1/2 lg:w-3/5'>
          <PatientsList />
        </div>
      </div>
    </section>
  );
}
