import React, { useState } from 'react';
import {
  HeaderContainer,
  Logo,
  MobileMenu,
  MobileMenuButton,
  Navigation,
  HeaderSection,
  MobileTitle
} from './headbar.styled';

const buttons = ['Ігри', 'Про платформу', 'Здай в аренду ПК', 'Новини', 'FAQ'];

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <HeaderSection>
        <Logo>
          <img src="https://res.cloudinary.com/teamprojectavatar/image/upload/v1700396946/TestTask/v0r1jc18irurreejq10w.png" alt="Logo" />
        </Logo>
        <Navigation>
          {buttons.map((button, index) => (
            <button key={index}>{button}</button>
          ))}
        </Navigation>
        <MobileMenuButton onClick={toggleMobileMenu}>Меню</MobileMenuButton>
        {isMobileMenuOpen && (
          <MobileMenu>
            <MobileTitle>Категорії</MobileTitle>
            {buttons.map((button, index) => (
              <button key={index}>{button}</button>
            ))}
          </MobileMenu>
        )}
      </HeaderSection>
    </HeaderContainer>
  );
};

export default Header;

