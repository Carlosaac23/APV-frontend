import { Outlet } from 'react-router';
import Footer from '@/components/Footer';

export default function AuthLayout() {
  return (
    <main className='mx-4 mt-4 md:grid md:grid-cols-2'>
      <Outlet />
      <div className='fixed right-0 bottom-0 left-0'>
        <Footer />
      </div>
    </main>
  );
}
