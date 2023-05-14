import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
function Navhead() {
  const cartLength = useSelector(state => state.cart);
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
            <Link className='nav-link position-relative' to='/cart'>
              <FontAwesomeIcon icon={faCartPlus} />
              {cartLength.length ? (
                <span
                  className='position-absolute text-light'
                  style={{
                    top: '5px',
                    left: '53%',
                    transform: ' translate(-50%,-50%)',
                    fontSize: ' 13px',
                  }}>
                  {cartLength.length}
                </span>
              ) : null}
            </Link>
            <Nav.Link href='#pricing'>Favorit</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Navhead;
