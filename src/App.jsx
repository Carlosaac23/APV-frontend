import { BrowserRouter, Routes, Route } from 'react-router';
import AuthLayout from '@/layout/AuthLayout';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ForgotPassword from '@/pages/ForgotPassword';
import VerifyAccount from '@/pages/VerifyAccount';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='verify/:token' element={<VerifyAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
