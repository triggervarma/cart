import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
  return (
    <div className="navbar">
      <ul className='nav-items'>
        <li>
          <Nav>
            <Nav.Link to="/" as={NavLink}>
              Login
            </Nav.Link>
          </Nav>
        </li>
        <li>
          <Nav>
            <Nav.Link to="/" as={NavLink}>
              Cart
            </Nav.Link>
          </Nav>
        </li>
      </ul>
          
         
    </div>
  );
};
