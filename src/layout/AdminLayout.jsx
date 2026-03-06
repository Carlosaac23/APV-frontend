import { Outlet, Navigate } from 'react-router-dom';

import { Spinner } from '@/components/ui/spinner';
import { useAuth } from '@/hooks/useAuth';

export default function AdminLayout() {
  const { auth, loading } = useAuth();

  if (loading) {
    return (
      <div className='fixed inset-0 flex items-center justify-center'>
        <Spinner className='size-8 text-sky-500' />
      </div>
    );
  }

  return <main>{auth?._id ? <Outlet /> : <Navigate to='/' />}</main>;
}
