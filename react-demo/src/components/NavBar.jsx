import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  return (
    <>
      <nav className="text-center text-2xl grid grid-cols-8">
        <Link
          to={`/${location.pathname === '/' ? 'floating-bubble' : ''}`}
          class="hover:underline cols-span-1"
        >
          {location.pathname === '/' ? 'floating-bubble' : 'home'}
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
