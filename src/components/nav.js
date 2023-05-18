import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Dropdown from './dropDown';
function Navhead() {
  return (
    <>
      <Navbar
        bg='dark'
        variant='dark'
        className='position-fixed w-100'
        style={{ zIndex: 10 }}>
        <Container>
          <Link className='navbar-brand' to='/'>
            Shopping App
          </Link>
          <Nav className='ms-auto'>
            <Nav.Link href='#pricing'>User</Nav.Link>
            <Link to='/' className='nav-link'>
              Home
            </Link>
            <Dropdown />
            <Nav.Link href='#pricing'>Favorit</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Navhead;
