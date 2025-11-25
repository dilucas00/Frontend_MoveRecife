import { Map, UserRound, House } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();
  return (
    <div className="dock fixed bottom-0 left-0 w-full z-50">
      <Link to="/homepage" className={location.pathname === '/' ? 'dock-active' : ''}>
        <House />
        <span className="dock-label text-sm">Home</span>
      </Link>

      <Link to="/map" className={location.pathname === '/map' ? 'dock-active' : ''}>
        <Map />
        <span className="dock-label text-sm">Mapa</span>
      </Link>

      <Link to="/profile" className={location.pathname === '/profile' ? 'dock-active' : ''}>
        <UserRound />
        <span className="dock-label text-sm">Perfil</span>
      </Link>
    </div>
  );
}