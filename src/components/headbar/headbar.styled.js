import styled from 'styled-components';

 export const HeaderContainer = styled.header`
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1c1c1c;
  color: #fff;
  font-family: Neue Machina-Regular;
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
    justify-content: space-between;
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
    background-color: #3f9c14;
    color: #fff;
    border: none;
    cursor: pointer;
     align-items: center;
    border-radius: 5px;
    display: flex;
    height: 32px;
    justify-content: center;
    width: 60px;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction:column;
    height: calc(100vh - 65px);
    width: 100%;
    left: 0;
    position: absolute;
    opacity: 1;
    overflow-y: hidden;
    top: 75px;
    background-color: #1c1c1c;
    color: #afafaf;
    padding: 30px 30px 0;
    
  }
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
    width: 100%;
    ursor: pointer;
    font-size: 16px;
    font-weight: 300;
    line-height: 143%;
    overflow: hidden;
    position: relative;
    transition: all .2s ease-in;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;

    &:hover {
      border: 1px solid #3f9c14;
      color: #3f9c14;
    }
  }
`;

export const MobileTitle = styled.h2`
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: 28px;
    margin-top: 10px;
    text-transform: uppercase;
    color: #eaeaea;
`