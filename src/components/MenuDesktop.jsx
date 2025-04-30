import { Link } from 'react-router-dom';

export default function MenuDesktop() {
  return (
    <nav className="desktop-nav">
      <Link className='cor' to="/"></Link>
      <Link className='cor' to="/album"></Link>
      <Link className='cor' to="/all"></Link>
      <a className='cor' id="logout"></a>
      <a className='in-cor' id="off"></a>
    </nav>
  );
}