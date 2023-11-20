import React from 'react';
import {
  Container,
  RegistrationLink,
  Loginlink,
    Image, 
  WelcomeTitle
} from './WelcomePage.styled';
import GoogleAuth from 'components/GoogleAuth/GoogleAuth';

const WelcomePage = () => {
  return (
      <Container>
      <WelcomeTitle>
        Welcome in cloud-gaming world! Lets the fun begin.
      </WelcomeTitle>
      <RegistrationLink to="/auth/register">Registration</RegistrationLink>
      <Loginlink to="/auth/login">Log In</Loginlink>
      <GoogleAuth/>
      <Image src="https://res.cloudinary.com/teamprojectavatar/image/upload/v1700396951/TestTask/jl3q5impnq7ua7q3veas.png" alt="Background" />
    </Container>
  );
};

export default WelcomePage;
