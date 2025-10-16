import { BrowserRouter, Route, Routes } from 'react-router';
import { AuthProvider } from '@/context/AuthProvider';
import { PatientsProvider } from '@/context/PatientsProvider';
import AdminLayout from '@/layout/AdminLayout';
import AuthLayout from '@/layout/AuthLayout';
import Admin from '@/pages/Admin';
import ChangePassword from '@/pages/ChangePassword';
import EditProfile from '@/pages/EditProfile';
import ForgotPassword from '@/pages/ForgotPassword';
import Login from '@/pages/Login';
import NewPassword from '@/pages/NewPassword';
import Register from '@/pages/Register';
import VerifyAccount from '@/pages/VerifyAccount';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PatientsProvider>
          <Routes>
            <Route path='/' element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path='register' element={<Register />} />
              <Route path='forgot-password' element={<ForgotPassword />} />
              <Route path='forgot-password/:token' element={<NewPassword />} />
              <Route path='verify/:token' element={<VerifyAccount />} />
            </Route>

            <Route path='/admin' element={<AdminLayout />}>
              <Route index element={<Admin />} />
              <Route path='profile' element={<EditProfile />} />
              <Route path='change-password' element={<ChangePassword />} />
            </Route>
          </Routes>
        </PatientsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
