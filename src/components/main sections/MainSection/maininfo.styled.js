import styled from 'styled-components';

export const MainSection = styled.section`
  background: #181818 url('https://res.cloudinary.com/teamprojectavatar/image/upload/v1700398533/TestTask/lmfdk9poyzklf0cc7l50.png') center/cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  align-items: center;
  z-index: -2;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0px 20px;
  }
`;

export const LeftContent = styled.div`
  padding-left: 50px;
  letter-spacing: 0.03em;

   @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0px 20px;
    margin-top: 40px;
    z-index: 1;
  }
`;

export const SectionTitle = styled.h2`
  color: #eaeaea;
  font-size: 54px;
  font-weight: 800;
  line-height: 125%;
  margin-bottom: 24px;
  text-transform: uppercase;
  width: 470px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    width: auto;
  }
`;

export const SectionText = styled.p`
  color: #afafaf;
  font-size: 20px;
  font-weight: 300;
  line-height: 34px;
  width: 420px;

  @media screen and (max-width: 768px) {
    width: auto;
    margin-top: 30px;
  }
`;

export const RightContent = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  height: 510px;
  justify-content: center;
  position: absolute;
  top: 53%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 64%;

  @media screen and (min-width: 380px) and (max-width: 767px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 50%;
    opacity: 1;
    position: fixed;
    top: 90px;
    -webkit-transform: translateX(-50%) scale(1);
    transform: translateX(-50%) scale(1);
    transition: all 0.2s ease-in-out;
    width: 90vw;
  }

  @media screen and (max-width: 380px){
    align-items: center;
    left: 50%;
    opacity: 1;
    position: fixed;
    top: 0px;
    -webkit-transform: translateX(-50%) scale(1);
    transform: translateX(-50%) scale(1);
    transition: all 0.2s ease-in-out;
    width: 90vw;
  }
`;

export const MainImage = styled.img`
  width: 65%;
  height: 100%;
  object-fit: contain;
  background-repeat: no-repeat;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 320px){
    width: 90vw;
  }
`;

export const NavigationTips = styled.p`
  color: #afafaf;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  margin-bottom: 14px;
`;

export const Free = styled.span`
  color: #fff;
  font-weight: 800;
`;

