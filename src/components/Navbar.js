import world from '../world.svg'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <img alt="logo" src={world} className="world" />
      <p className='text'>my travel journal.</p>
    </nav>
  );
}

export default Navbar;