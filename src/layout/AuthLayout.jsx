import { Outlet } from 'react-router';

export default function AuthLayout() {
  return (
    <main className='mx-4 mt-4 md:grid md:grid-cols-2'>
      <Outlet />
    </main>
  );
}
