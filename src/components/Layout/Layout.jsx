import { Outlet } from 'react-router-dom';

import { AppBarComponent } from 'components/AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <AppBarComponent />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
