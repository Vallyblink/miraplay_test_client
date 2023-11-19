
import { LoginForm } from 'components/welcomeForms/LoginFrom.js/LoginForm';
import { RegisterForm } from 'components/welcomeForms/RegisterForm/RegisterForm';
import React from 'react';
import { useParams} from 'react-router-dom';

const AuthPage = () => {
  const { id } = useParams();



  return (
    <>
      {id === 'register' && <RegisterForm  />}
      {id === 'login' && <LoginForm />}
    </>
  );
};
export default AuthPage;