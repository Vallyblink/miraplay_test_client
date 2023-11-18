
import { LoginForm } from 'components/welcomeForms/LoginFrom.js/LoginForm.js';
import { RegisterForm } from 'components/welcomeForms/RegisterForm/RegisterForm.js';
import React from 'react';


const AuthPage = () => {

  return (
    <>
      <RegisterForm  />
      <LoginForm />
    </>
  );
};
export default AuthPage;