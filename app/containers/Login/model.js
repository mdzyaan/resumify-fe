import * as yup from 'yup';

export const fieldNames = {
  email: 'email',
  password: 'password',
};

export const loginValidationSchema = yup.object().shape({
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
});
