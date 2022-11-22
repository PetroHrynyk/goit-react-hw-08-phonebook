import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { selectLogInError } from 'redux/auth/selectors';
import { updateErrorLogIn } from 'redux/auth/authSlice';
import { TextField } from 'formik-material-ui';

import {
  FormLogInEl,
  InputLogInEl,
  LogInLabel,
   Error,
  InputError,
} from 'components/LoginForm/LoginForm.styled';
import { useEffect } from 'react';
import { Button } from '@mui/material';

const schema = yup.object().shape({
  email: yup.string().email('Not a proper email'),
  password: yup.string().min(6).required('Password is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectLogInError);

  useEffect(() => {
    dispatch(updateErrorLogIn(error));
    return () => {
      dispatch(updateErrorLogIn(null));
    };
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    if (error !== null) {
      resetForm();
    }
  };

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormLogInEl>
          <LogInLabel>Email</LogInLabel>
          <InputLogInEl component={TextField} type="email" name="email" placeholder="Enter email" />
          <InputError name="email" component="div" />

          <LogInLabel>Password</LogInLabel>
          <InputLogInEl
          component={TextField}
            type="password"
            name="password"
            placeholder="Enter password"
          />
          <InputError name="password" component="div" />

          {/* <SubmitLogInButton type="submit">Log In</SubmitLogInButton> */}
          <Button variant='contained' type="submit">Log In</Button>
        </FormLogInEl>
      </Formik>
      {error && (
        <Error>
          Are you shure you have an account? Check the data you entered, or don't be shy - register
        </Error>
      )}
    </>
  );
};
