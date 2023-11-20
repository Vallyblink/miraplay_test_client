import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background: #181818 url('https://res.cloudinary.com/teamprojectavatar/image/upload/v1700398533/TestTask/lmfdk9poyzklf0cc7l50.png') center/cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  z-index: -2;
  

  @media screen and (min-width: 768px) {
    padding: 0px 148px;
    z-index: -2;
  }
`;

export const WelcomeTitle = styled.p`
  color: #3f9c14; 
  font-size: 26px;
  font-weight: 700; 
  line-height: 38px; 
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 30px; 
  max-width: 800px;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    max-width: 473px;
    max-width: 800px;
    font-size: 36px;
    
  }
    @media screen and (max-width: 530px) {
    max-width: 473px;

  }
`;



const Link = styled(NavLink)`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;
  text-align: center;
  border-radius: 8px;

  padding: 14px 0;
  text-decoration: none;
  max-width: 335px;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 344px;
  }
`;

export const RegistrationLink = styled(Link)`
  color: #fff; 
  background: #3f9c14; 
  margin-bottom: 30px;
`;

export const Loginlink = styled(Link)`
  color: #3f9c14; 
  background: #fff; 
  margin-bottom: 30px;
`;

export const Image = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: -1; 
  
  @media screen and (min-width: 768px) {
    width: 25%; 
  }
`;
