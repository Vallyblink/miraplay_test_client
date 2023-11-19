// Header.js
import React, { useState } from 'react';
import styled from 'styled-components';

const buttons = ['Ігри', 'Про платформу', 'Здай в аренду ПК', 'Новини', 'FAQ'];

const HeaderContainer = styled.header`
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #1c1c1c;
  color: #fff;
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 20px;

  button {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    display: none; /* Ховаємо навігацію на більших екранах */
  }
`;

const MobileMenuButton = styled.button`
  display: none; /* Приховуємо кнопку на більших екранах */

  @media screen and (max-width: 768px) {
    display: block; /* Показуємо кнопку на мобільних пристроях */
  }
`;

const MobileMenu = styled.div`
  display: none; /* Приховуємо випадаюче меню на більших екранах */

  @media screen and (max-width: 768px) {
    display: block; /* Показуємо випадаюче меню на мобільних пристроях */
    position: fixed;
    top: 90px;
    right: 20px;
    background-color: #1c1c1c;
    color: #fff;
    padding: 10px;
  }
`;

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo>Logo</Logo>
      <Navigation>
        {buttons.map((button, index) => (
          <button key={index}>{button}</button>
        ))}
      </Navigation>
      <MobileMenuButton onClick={toggleMobileMenu}>Меню</MobileMenuButton>
      {isMobileMenuOpen && (
        <MobileMenu>
          {buttons.map((button, index) => (
            <button key={index}>{button}</button>
          ))}
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;
