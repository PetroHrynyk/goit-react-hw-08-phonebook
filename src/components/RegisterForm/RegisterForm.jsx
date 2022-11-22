import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import { selectRegisterError } from 'redux/auth/selectors';
import { updateErrorRegister } from 'redux/auth/authSlice';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import { TextField } from 'formik-material-ui';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


import Box from '@mui/material/Box';

import {
  FormRegisterEl,
  InputRegisterEl,
  // RegisterLabel,
  Error,
  // InputError,
} from 'components/RegisterForm/RegisterForm.styled';
import { Paper, Typography } from '@mui/material';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email('Not a proper email'),
  password: yup.string().min(6).required('Password is required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectRegisterError);

  useEffect(() => {
    dispatch(updateErrorRegister(error));
    return () => {
      dispatch(updateErrorRegister(null));
    };
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));

    if (error !== null) {
      resetForm();
    }
  };

  return (
    <Box>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormRegisterEl><Paper elevation={5} sx={{p:3, display:'flex', alignItems: "center", flexDirection:"column"}}>
          {/* <RegisterLabel>Username</RegisterLabel> */}
          <Typography variant='h5' color={'#0d47a1'}>Username</Typography>
          <InputRegisterEl component={TextField} type="text" name="name" placeholder="Enter name" />
          
          {/* <InputError name="name" component="div" /> */}



          {/* <RegisterLabel>Email</RegisterLabel> */}
          <Typography variant='h5' color={'#0d47a1'}>Email</Typography>
          <InputRegisterEl
          component={TextField}
            type="email"
            name="email"
            placeholder="Enter email"
          />
           
          {/* <InputError name="email" component="div" /> */}

          {/* <RegisterLabel>Password</RegisterLabel> */}
          <Typography variant='h5' color={'#0d47a1'}>Password</Typography>
          <InputRegisterEl
            component={TextField}
            type="password"
            name="password"
            placeholder="Enter password"
          />
          

          {/* <InputError name="password" component="div" /> */}

          {/* <SubmitRegisterButton type="submit">Register</SubmitRegisterButton> */}
          <Button variant="contained" type="submit">Register</Button>
          </Paper>
        </FormRegisterEl>
      </Formik>
      
        {error && (
        <Error>
         Oops, something went wrong. Try again
        </Error>
      )}
    
    </Box>
  );
};
