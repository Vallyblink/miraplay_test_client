import styled from 'styled-components';

export const MainSection = styled.section`
  background: #181818 url('https://res.cloudinary.com/teamprojectavatar/image/upload/v1700398533/TestTask/lmfdk9poyzklf0cc7l50.png') center/cover;
  height: 650px;
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  align-items: center;
  z-index: -2;

 @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;
    
    justify-content: space-around;
  }

  @media screen and (min-width: 320px) and (max-width: 780px){
    flex-direction: column-reverse;
    
    
    }

`;

export const LeftContent = styled.div`
  padding-left: 50px;
  letter-spacing: 0.03em;

   @media screen and (max-width: 1200px) {
   z-index:1;
   margin-top: 100px;
  }

  @media screen and (min-width: 320px) and (max-width: 780px){
   z-index:1;
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

  @media screen and (max-width: 1200px) {
    font-size: 26px;
    font-weight: 800;
    line-height: 125%;
    margin-bottom: 24px;
    text-transform: uppercase;
    width: 80%;
  }

  @media screen and (min-width: 320px) and (max-width: 780px){
    font-size: 20px;
    font-weight: 800;
    line-height: 100%;
    margin-bottom: 24px;
    text-transform: uppercase;
    width: 80%;
    }
`;

export const SectionText = styled.p`
  color: #afafaf;
  font-size: 20px;
  font-weight: 300;
  line-height: 34px;
  width: 420px;

  @media screen and (max-width: 1200px) {
    font-size: 16px;
    font-weight: 300;
    line-height: 170%;
    width: 100%;
  }

  @media screen and (min-width: 320px) and (max-width: 780px){
    font-size: 14px;
    font-weight: 300;
    line-height: 170%;
    width: 100%;
    }
`;

export const RightContent = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

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

 @media screen and (min-width: 320px) and (max-width: 780px) {
    left: 55%;
    position: absolute;
    top: 50px;
    -webkit-transform: translateX(-50%) scale(1);
    transform: translateX(-50%) scale(1);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 1200px){
    left: 50%;
    position: absolute;
    top: 10px;
    height: 350px;
    -webkit-transform: translateX(-50%) scale(1);
    transform: translateX(-50%) scale(1);
    transition: all 0.2s ease-in-out;
    
    
  }
`;

export const MainImage = styled.img`
  width: 75%;
  height: 100%;
  object-fit: contain;
  background-repeat: no-repeat;

  @media screen and (max-width: 1200px) {
   width: 80vw;
  }

  @media screen and (min-width: 320px) and (max-width: 780px){
   width: 70vw;
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

