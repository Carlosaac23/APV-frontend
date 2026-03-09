import { Routes, Route } from 'react-router-dom';

import AdminLayout from '@/layout/AdminLayout';
import AuthLayout from '@/layout/AuthLayout';
import About from '@/pages/About';
import AdminPatients from '@/pages/AdminPatients';
import ConfirmAccount from '@/pages/ConfirmAccount';
import ForgotPassword from '@/pages/ForgotPassword';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ResetPassword from '@/pages/ResetPassword';

export default function App() {
  return (
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
      </Route>
    </Routes>
  );
}
