import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthLayout from '@/layout/AuthLayout';
import ConfirmAccount from '@/pages/ConfirmAccount';
import ForgotPassword from '@/pages/ForgotPassword';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ResetPassword from '@/pages/ResetPassword';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path='confirm/:token' element={<ConfirmAccount />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='forgot-password/:token' element={<ResetPassword />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
