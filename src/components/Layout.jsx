import MenuMobile from './MenuMobile';
import MenuDesktop from './MenuDesktop';
import '../css/layout.css';
import backgroundVideo from '../assets/background.mp4';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header className='block-menu'>
        <MenuMobile />
        <MenuDesktop />
      </header>

      <main className='main-content'>
        <Outlet />
      </main>

      <video src={backgroundVideo} className='background' muted loop autoPlay></video>
    </>
  );
}