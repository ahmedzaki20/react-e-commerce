import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';

import { useDispatch, useSelector } from 'react-redux';

function LogIn() {
  const sign = useSelector(state => state.signUp);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState();
  useEffect(() => {
    console.log(sign);
  }, []);
  const handler = () => {
    console.log(userName);
    console.log(password);
    if (sign.some(profile => profile.email == userName)) {
      console.log(userName);
      if (
        sign.find(profile => profile.email == userName).password == password
      ) {
        console.log('matches');
      }
    }
  };

  return (
    <Container className='pt-5'>
      <Form
        className='mt-5 p-3 '
        onSubmit={e => {
          e.preventDefault();
          handler();
        }}>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            //   value={values.email}
            //   onChange={handleChange}
            //   onBlur={handleBlur}
            //   placeholder='Enter your email'
            //   isInvalid={touched.email && errors.email}
            onChange={e => {
              setUserName(e.target.value);
            }}
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Control.Feedback type='invalid'>
            {/* {errors.email} */}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            //   value={values.password}
            //   onChange={handleChange}
            //   onBlur={handleBlur}
            //   isInvalid={touched.password && errors.password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
          <Form.Control.Feedback type='invalid'>
            {/* {errors.password} */}
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          variant='primary'
          className='d-block m-auto'
          size=''
          type='submit'>
          Log In
        </Button>{' '}
      </Form>
    </Container>
  );
}
export default LogIn;
