import { useState } from 'react';
import Form from '@/components/Form';
import PatientsList from '@/components/PatientsList';
import Footer from '@/components/Footer';

export default function Admin() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <button
          type='button'
          className='mx-auto rounded-md bg-sky-500 px-6 py-2 text-neutral-50 shadow-sm transition-transform duration-150 ease-out hover:cursor-pointer hover:bg-sky-600 active:scale-97 md:hidden'
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Ocultar Formulario' : 'Mostrar Formulario'}
        </button>
        <div
          className={` ${showForm ? 'block' : 'hidden'} md:block md:w-1/2 lg:w-2/5`}
        >
          <Form />
        </div>

        <div className='md:w-1/2 lg:w-3/5'>
          <PatientsList />
        </div>
      </div>

      <Footer />
    </>
  );
}
