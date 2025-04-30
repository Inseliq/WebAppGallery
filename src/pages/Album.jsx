import { Link } from 'react-router-dom';

function Album() {
  return (
    <>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Главная</Link>
        <Link to="/album">Альбом</Link>
      </nav>
    </>
  );
}

export default Album