import { Outlet, Navigate } from 'react-router';
import useAuth from '@/hooks/useAuth';
import Header from '@/components/Header';

export default function AdminLayout() {
  const { auth, loading } = useAuth();

  if (loading) return 'Cargando...';
  return (
    <>
      <Header />
      {auth?._id ? (
        <main className='container mx-auto mt-10'>
          <Outlet />
        </main>
      ) : (
        <Navigate to='/' />
      )}
    </>
  );
}
