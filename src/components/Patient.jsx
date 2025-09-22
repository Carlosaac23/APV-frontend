import formatDate from '@/helpers/formatDate';

export default function Patient({ patient }) {
  const { name, owner, email, date, symptoms, _id } = patient;

  return (
    <div className='mx-5 my-10 rounded-md border border-neutral-300 bg-neutral-100 p-4 shadow-sm'>
      <p className='text-lg font-bold'>
        Nombre:{' '}
        <span className='text-base font-normal normal-case'>{name}</span>
      </p>

      <p className='text-lg font-bold'>
        Propietario:{' '}
        <span className='text-base font-normal normal-case'>{owner}</span>
      </p>

      <p className='text-lg font-bold'>
        Correo:{' '}
        <span className='text-base font-normal normal-case'>{email}</span>
      </p>

      <p className='text-lg font-bold'>
        Fecha de Alta:{' '}
        <span className='text-base font-normal normal-case'>
          {formatDate(date)}
        </span>
      </p>

      <p className='text-lg font-bold'>
        Símtomas:{' '}
        <span className='text-base font-normal normal-case'>{symptoms}</span>
      </p>

      <div className='mt-5 flex justify-between'>
        <button
          type='button'
          className='rounded-md bg-sky-500 px-6 py-2 text-neutral-50 shadow-sm transition-transform duration-150 ease-out hover:cursor-pointer hover:bg-sky-600 active:scale-97'
        >
          Editar
        </button>

        <button
          type='button'
          className='rounded-md bg-red-500 px-6 py-2 text-neutral-50 shadow-sm transition-transform duration-150 ease-out hover:cursor-pointer hover:bg-red-600 active:scale-97'
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
