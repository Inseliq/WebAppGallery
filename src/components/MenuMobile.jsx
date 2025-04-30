import { Link } from 'react-router-dom';

export default function MenuMobile() {
  return (
    <nav className="mobile-nav" style={{ display: 'none' }}>
      <Link to="/" className='home'>Главная</Link>
      <Link to="/album" className='album'>Альбом</Link>
      <Link to="/album" className='album'>Все фотографии</Link>
    </nav>
  );
}