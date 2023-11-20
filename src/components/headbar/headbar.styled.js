import styled from 'styled-components';

 export const HeaderContainer = styled.header`
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1c1c1c;
  color: #fff;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

 export const HeaderSection = styled.header`
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1c1c1c;
  color: #fff;
  position: fixed;
  max-width: 1170px;
   @media screen and (max-width: 1200px){
    width: 80%;
    display: flex;
    justify-content: center;
    }


    @media screen and (min-width: 320px) and (max-width: 767px){
    width: calc((100% - 60px) / 1);
    }
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  font-size: 14px;
  font-weight: inherit;
  line-height: 20px;
  text-align: center;
  white-space: nowrap;
   
  button {
  border: none;
  align-items: center;
  height: 42px;
  justify-content: center;
  border-radius: 8px;
  margin: 10px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: #1c1c1c;
  color: #eaeaea;
  z-index:3;

  &:hover {
    border: 1px solid '#3f9c14';
    color: #3f9c14;
    
  }

  @media screen and (max-width: 768px) {
    display: none; 
  }
`;

export const MobileMenuButton = styled.button`
  display: none; 

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: none; 

  @media screen and (max-width: 768px) {
    display: block; 
    top: 90px;
    right: 20px;
    background-color: #1c1c1c;
    color: #fff;
    padding: 10px;
  }
`;