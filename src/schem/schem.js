import * as yup from 'yup';
const passwordRg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
export const basiceShema = yup.object().shape({
  email: yup.string().email('Please Enter a valid email').required(),
  username: yup.string().required(),
  password: yup
    .string()
    .min(8)
    .matches(passwordRg, 'Please Enter a valid password')
    .required(),
  confPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'passwords most match')
    .required(),
});
