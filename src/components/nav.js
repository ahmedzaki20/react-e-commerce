import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Dropdown from './dropDown';
import { useDispatch, useSelector } from 'react-redux';
import {  logOut } from '../store/slices/profile';

function Navhead() {
const profile=useSelector((state)=>state.profile)
const dispatch=useDispatch()
console.log(profile);

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
            <Link to='/' className='nav-link'>
              Home
            </Link>
           {profile.length? <><Link to='/' className='nav-link'>
              {profile[0].name}
            </Link>
               <Dropdown />
               <Nav.Link href='#pricing'>Favorit</Nav.Link>
               <a role='button' className='nav-link'onClick={()=>{
                dispatch(logOut())
               }}>
              sign out
            </a>
               </>
            :<>
             <Link to='/sign-up' className='nav-link'>
              sign up
            </Link>
            <Link to='/log-in' className='nav-link'>
            log in
            </Link></>}
    
           
         
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Navhead;
