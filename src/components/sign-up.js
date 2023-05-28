import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';

import { useFormik } from 'formik';
import { basiceShema } from '../schem/schem';
import { useDispatch } from 'react-redux';
import { signUp } from '../store/slices/signUpslice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signUpAlert = () => {
    Swal.fire({
      icon: 'success',
      title: `Welcome ${values.username}`,
      text: 'You sgin up to shopping cart app',
    });
  };
  // submiting sign up
  const onSubmit = (values, actions) => {
    dispatch(signUp(values));
    signUpAlert();
    setTimeout(() => {
      actions.resetForm();
      navigate('/log-in');
    }, 1000);
  };

  const { handleBlur, handleChange, errors, handleSubmit, values, touched } =
    useFormik({
      initialValues: {
        email: '',
        username: '',
        password: '',
        confPassword: '',
      },
      validationSchema: basiceShema,
      enableReinitialize: true,
      onSubmit,
    });

  return (
    <>
      <Container className='pt-5'>
        <Form className='mt-5 p-3 ' onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Enter your email'
              isInvalid={touched.email && errors.email}
            />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type='invalid'>
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3' controlId='username'>
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your name'
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={touched.username && errors.username}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.username}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={touched.password && errors.password}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3' controlId='confPassword'>
            <Form.Label>Confrim Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              value={values.confPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={touched.confPassword && errors.confPassword}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.confPassword}
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            variant='primary'
            className='d-block m-auto'
            size=''
            type='submit'>
            Sign Up
          </Button>{' '}
        </Form>
      </Container>
    </>
  );
}
export default SignUp;
