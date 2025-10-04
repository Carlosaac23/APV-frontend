import usePatients from '@/hooks/usePatients';
import Patient from './Patient';

export default function PatientsList() {
  const { patients } = usePatients();

  return (
    <>
      {patients.length ? (
        <>
          <h2 className='mt-4 text-center text-2xl font-bold'>Pacientes</h2>

          {patients.map((patient) => (
            <Patient key={patient._id} patient={patient} />
          ))}
        </>
      ) : (
        <>
          <h2 className='mt-4 text-center text-2xl font-bold'>
            No Hay Pacientes
          </h2>
          <p className='text-center text-sm text-neutral-400'>
            Comienza agregando tus primeros pacientes
          </p>
        </>
      )}
    </>
  );
}
