import { Navigate, Outlet } from 'react-router';
import Header from '@/components/Header';
import useAuth from '@/hooks/useAuth';

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
