import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Figure } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfInfo } from '../store/slices/profile';
import Swal from 'sweetalert2';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function User() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let profile = useSelector(state => state.profile);
  const [updateProf, setUpdateProf] = useState(...profile);
  const handleName = e => {
    const newName = e.target.value;
    setUpdateProf({ ...updateProf, name: newName });
  };
  const handleNum = e => {
    const phoneNum = e.target.value;
    setUpdateProf({ ...updateProf, phoneNum });
  };
  const handleAge = e => {
    const age = e.target.value;
    setUpdateProf({ ...updateProf, age });
  };
  const [image, setImage] = useState('');
  const handleImageUpload = event => {
    const file = event.target.files[0];
    const reader = file && new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setImage(reader.result);
      setUpdateProf({ ...updateProf, image: reader.result });
    };
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(updateProfInfo(updateProf));

    Swal.fire({
      icon: 'success',
      title: ``,
      text: 'You have successfully update your profile',
    });
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };
  useEffect(() => {}, []);
  return (
    <>
      <Form className='pt-5' onSubmit={handleSubmit}>
        <Container className='mt-5'>
          <Form.Group as={Row} className='my-3' va controlId='email'>
            <Form.Label column sm='2'>
              Email
            </Form.Label>
            <Col sm='10'>
              <Form.Control plaintext readOnly value={updateProf.email} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='my-3' controlId='name'>
            <Form.Label column sm='2'>
              username
            </Form.Label>
            <Col sm='10'>
              <Form.Control value={updateProf.name} onChange={handleName} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='my-3' controlId='phoneNum'>
            <Form.Label column sm='2'>
              Phone number
            </Form.Label>
            <Col sm='10'>
              <Form.Control
                type='number'
                value={updateProf.phoneNum}
                onChange={handleNum}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='my-3' controlId='age'>
            <Form.Label column sm='2'>
              Age
            </Form.Label>
            <Col sm='10'>
              <Form.Control
                type='number'
                value={updateProf.age}
                onChange={handleAge}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='my-3' controlId='img'>
            <Form.Label column sm='2'>
              Profile picture
            </Form.Label>
            <Col sm='10'>
              <Form.Control type='file' onChange={handleImageUpload} />
              {image && (
                <Figure className='pt-5'>
                  <Figure.Image
                    width={171}
                    height={180}
                    alt='171x180'
                    src={image}
                  />
                </Figure>
              )}
            </Col>
          </Form.Group>
          <Button
            variant='primary'
            className='d-block m-auto'
            size=''
            type='submit'>
            Update
          </Button>{' '}
        </Container>
      </Form>
    </>
  );
}
export default User;
