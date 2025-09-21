import { Outlet } from 'react-router';

export default function AdminLayout() {
  return (
    <>
      <h1>Esta es una ruta de Admin/protegida</h1>
      <Outlet />
    </>
  );
}
