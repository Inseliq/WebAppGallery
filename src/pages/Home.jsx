import { Link } from 'react-router-dom';
import '../css/style/home.css';
import Auth from '../components/Auth';
import HomeSection from '../components/HomeSection';

function Home() {
  return (
      <>
      <Auth />
      <HomeSection />
      </>
  );
}

export default Home