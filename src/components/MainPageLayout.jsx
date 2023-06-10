import { Outlet } from 'react-router';
import Navs from './Navs';
import AppTittle from './AppTittle';

export default function MainPageLayout() {
  return (
    <div>
      <AppTittle />
      <Navs />
      <Outlet />
    </div>
  );
}
