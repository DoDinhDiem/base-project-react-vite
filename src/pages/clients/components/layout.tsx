import { Outlet } from 'react-router-dom';

import FooterComponent from './_components/footer.component';
import HeaderComponent from './_components/header.component';

const AdminLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default AdminLayout;
