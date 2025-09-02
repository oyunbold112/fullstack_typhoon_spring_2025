import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Нүүр</Link>
      <Link to="/add" className="nav-link">Даалгавар нэмэх</Link>
    </nav>
  );
};

export default Navbar;
