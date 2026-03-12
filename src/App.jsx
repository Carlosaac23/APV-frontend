import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import AdminLayout from '@/layout/AdminLayout';
import AuthLayout from '@/layout/AuthLayout';
const About = lazy(() => import('@/pages/About'));
const AdminPatients = lazy(() => import('@/pages/AdminPatients'));
const Login = lazy(() => import('@/pages/Login'));
const ChangeAccountPassword = lazy(
  () => import('@/pages/ChangeAccountPassword')
);
const ConfirmAccount = lazy(() => import('@/pages/ConfirmAccount'));
const EditProfile = lazy(() => import('@/pages/EditProfile'));
const ForgotPassword = lazy(() => import('@/pages/ForgotPassword'));
const Register = lazy(() => import('@/pages/Register'));
const ResetPassword = lazy(() => import('@/pages/ResetPassword'));
import Home from '@/pages/Home';

export default function App() {
  return (
    <Suspense fallback={<div className='p-6'>Loading...</div>}>
      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='confirm/:token' element={<ConfirmAccount />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='forgot-password/:token' element={<ResetPassword />} />
          <Route path='register' element={<Register />} />
          <Route path='about' element={<About />} />
        </Route>

        {/* Protected Routes */}
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<AdminPatients />} />
          <Route path='profile' element={<EditProfile />} />
          <Route path='change-password' element={<ChangeAccountPassword />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
