import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <main className='container mx-auto mt-12 items-center gap-24 p-5 md:grid md:grid-cols-2'>
      <Outlet />
    </main>
  );
}
