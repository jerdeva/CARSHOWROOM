import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  Header,
  FooterText,
} from './Layout.styded';

export const Layout = () => {
  return (
    <>
      <Header>CAR SHOWROOM</Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <footer>
        <FooterText>&copy; {new Date().getFullYear()} CAR SHOWROOM</FooterText>
      </footer>
    </>
  );
};
