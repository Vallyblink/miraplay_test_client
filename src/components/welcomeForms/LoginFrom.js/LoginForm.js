import { Formik } from 'formik';
import { LoginFormContext } from './LoginFormContext';

import {
  Container,
  FormWrap,
  Navigation,
  StyledLink,
} from '../RegisterForm/RegisterForm.styled.js';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import {
  setError,
  setIsLoggedIn,
  setCredentials,
} from 'redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { Report } from 'notiflix';
import { loginValidationSchema } from 'validationSchemas/loginValidationSchema';
import { useLogInMutation } from 'services/api_auth/api_auth';

export const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [login] = useLogInMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    const trimmedValues = {
      email: values.email.trim(),
      password: values.password.trim(),
    };

    try {
      const response = await login(trimmedValues);

      if (response.data && response.data.token) {
        dispatch(setCredentials(response.data));
        dispatch(setIsLoggedIn(true));
        navigate('/home');
        resetForm();
      }

      if (response.error) {
        if (response.error.status === 400) {
          Report.failure('Error!', 'Email or password is wrong', 'Okay');
        }
        if (response.error.status === 401) {
          Report.failure('Error!', 'Email or password is wrong', 'Okay');
        }

        dispatch(setError(response.error));
      }
    } catch (error) {
      dispatch(setError(error));
    }
  };

  return (
    <Container>
      <FormWrap>
        <Navigation>
          <StyledLink to="/auth/register">Registration</StyledLink>
          <StyledLink to="/auth/login">Log In</StyledLink>
        </Navigation>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={loginValidationSchema}
        >
          {() => (
            <>
             
              <LoginFormContext
                showPassword={showPassword}
                togglePassword={togglePassword}
              />
            </>
          )}
        </Formik>
      </FormWrap>
    </Container>
  );
};