import Patient from '@/components/Patient';
import { usePatients } from '@/context/PatientsProvider';

export default function PatientsList() {
  const { patients } = usePatients();

  return (
    <>
      {patients.length ? (
        <>
          <h2 className='my-6 text-center font-bold text-sky-950'>Patients</h2>

          {patients.map(patient => (
            <Patient key={patient._id} patient={patient} />
          ))}
        </>
      ) : (
        <>
          <h2 className='text-sly-950 my-6 text-center font-bold'>
            No Patients Yet
          </h2>
        </>
      )}
    </>
  );
}
