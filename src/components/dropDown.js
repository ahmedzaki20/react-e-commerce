import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Dropdown() {
  const cartLength = useSelector(state => state.cart);
  return (
    <>
      <div
        className='navbar-collapse position-relative'
        id='navbarNavDarkDropdown'>
        
        {cartLength.length ? (
          <span
            className='position-absolute text-light'
          
            style={{
              top: '-11%',
              left: '19%',
              transform: ' translate(0%,0%)',
              fontSize: ' 13px',
              display: 'block',
            }}>
            {cartLength.length}
          </span>
        ) : null}
        <ul className='navbar-nav'>
          <li className='nav-item dropdown'>
            <a
              className='text-light dropdown-toggle'
              role='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'>
              <FontAwesomeIcon icon={faCartPlus} />
            </a>
            <ul className='dropdown-menu dropdown-menu-dark'>
              <li>
                <a
                  className='dropdown-item d-flex justify-content-between'
                  style={{ fontSize: '10px' }}
                  href='#'>
                  <span>Name</span>
                  <span>Quantity</span>
                </a>
              </li>
              {cartLength.map(product => {
                return (
                  <li>
                    <a
                      className='dropdown-item d-flex justify-content-between'
                      key={product.id}
                      style={{ fontSize: '10px' }}
                      href='#'>
                      <span>{product.title.slice(0, 20)}... </span>
                      <span>{product.qty}</span>
                    </a>
                  </li>
                );
              })}
              <li>
                <hr className='dropdown-divider' />
              </li>
              <li>
                <Link className='dropdown-item' to='/cart'>
                  View All
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Dropdown;
