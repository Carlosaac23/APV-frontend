import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthLayout from '@/layout/AuthLayout';
import ConfirmAccount from '@/pages/ConfirmAccount';
import ForgotPassword from '@/pages/ForgotPassword';
import Login from '@/pages/Login';
import Register from '@/pages/Register';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path='confirm/:id' element={<ConfirmAccount />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
