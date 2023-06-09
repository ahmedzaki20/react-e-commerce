import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/slices/productSlice';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { addToCart } from '../store/slices/addToCartSlice';
import { addToFav } from '../store/slices/addToFav';
import { InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { SpinnerRoundOutlined } from 'spinners-react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';



function Products(props) {
  const dipatch = useDispatch();
  const profile=useSelector((state)=>state.profile)
  let products = useSelector(state => state.products);
  const fav = useSelector(state => state.fav);
  const cart = useSelector(state => state.cart);
  const navigate=useNavigate()
  const [productUi, setProductUi] = useState([]);
  const searchUi = value => {
    setProductUi(products);
    setProductUi(
      products.filter(product =>
        product.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };
  useEffect(() => {
    dipatch(fetchProducts());
  }, []);
  useEffect(() => {
    setProductUi(products);
  }, [products]);
  const sweetalertSign=()=>{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Sgin in first',
      footer:  ""
    })
  }
  const signInFirst=()=>{
    sweetalertSign()
   setTimeout(()=>{
    navigate("/log-in")
   },1000)
  }
  return (
    <>
      <Container className='pt-5'>
        <InputGroup className='mt-5'>
          <Form.Control
            placeholder='Search'
            aria-label='Search'
            aria-describedby='basic-addon1'
            onKeyUp={e => {
              searchUi(e.target.value);
              console.log(productUi);
            }}
          />
        </InputGroup>
        <Row className='pt-3'>
          {productUi.length ? (
            productUi.map(product => {
              return (
                <Col key={product.id} className='my-2'>
                  <Card
                    style={{ width: '18rem', height: '500px' }}
                    className='m-auto'>
                    <Card.Img
                      variant='top'
                      src={product.image}
                      style={{ height: '300px' }}
                    />
                    <Card.Body className='d-flex flex-column justify-content-between'>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>{product.price}$</Card.Text>
                      <div className='d-flex  justify-content-between'>
                    <Button
                          className='me-auto'
                          variant='success'
                          onClick={() => profile.length?dipatch(addToCart(product)):signInFirst()}>
                          Add to cart
                        </Button>
                        <div
                          role='button'
                          onClick={() => {
                            dipatch(addToFav(product));
                          }}>
                          {' '}
                          {fav.find(
                            favProduct => favProduct.id == product.id
                          ) ? (
                            <FontAwesomeIcon
                              icon={faHeart}
                              size='lg'
                              style={{ color: '#e81111' }}
                            />
                          ) : (
                            <FontAwesomeIcon icon={faHeart} size='lg' />
                          )}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <SpinnerRoundOutlined
              size={100}
              thickness={200}
              className='position-absolute top-50 start-50 translate-middle'
            />
          )}
        </Row>
      </Container>
    </>
  );
}
export default Products;
