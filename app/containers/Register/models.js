import * as yup from 'yup';

export const fieldNames = {
  name: 'name',
  email: 'email',
  password: 'password',
  repeatPassword: 'repeatPassword',
};

export const registerValidationSchema = yup.object().shape({
  [fieldNames.name]: yup
    .string()
    .trim()
    .required('Name is required'),
  [fieldNames.email]: yup
    .string()
    .email()
    .trim()
    .required('Email is required'),
  [fieldNames.password]: yup
    .string()
    .trim()
    .min(8)
    .required('Password is required'),
  [fieldNames.repeatPassword]: yup
    .string()
    .trim()
    .min(8)
    .required('Please enter your password again'),
});
