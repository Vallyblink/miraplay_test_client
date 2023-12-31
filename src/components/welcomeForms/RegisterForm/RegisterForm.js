import { Formik } from 'formik';
import { validationSchema } from 'validationSchemas/validationSchema';
import { RegisterFormContext } from './RegisterFormContext';
import {
  Container,
  FormWrap,
  Navigation,
  StyledLink,
} from './RegisterForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials, setError, setIsLoggedIn } from 'redux/authSlice';
import { Report } from 'notiflix';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from 'services/api_auth/api_auth';

export const RegisterForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();
  const [register] = useRegisterMutation();

  const handleSubmit = async (values, { resetForm }) => {
    const trimmedValues = {
      name: values.name.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
    };
    try {
      const response = await register(trimmedValues);
      if (response.data && response.data.user.token) {
        dispatch(setCredentials(response.data));
        dispatch(setIsLoggedIn(true));
        navigate("/home");
        resetForm();
      }

    } catch (error) {
      if (error.status === 409) {
        Report.failure('Error!', 'Email is already in use', 'Okay');
      } else if (error.status === 400) {
        Report.failure('Error!', 'Name field must be filled in', 'Okay');

        dispatch(setError(error));
      } else {
        Report.failure('Error!', `${error.data.message}`, 'Okay');

        dispatch(setError(error));
      }
    }
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Navigation>
            <StyledLink to="/auth/register">Registration</StyledLink>
            <StyledLink to="/auth/login">Log In</StyledLink>
          </Navigation>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <>
                <RegisterFormContext
                  showPassword={showPassword}
                  togglePassword={togglePassword}
                />
              </>
            )}
          </Formik>
        </FormWrap>
      </Container>
    </>
  );
};