import React from 'react';
import {
  MainSection,
  LeftContent,
  SectionTitle,
  SectionText,
  RightContent,
  ImageContainer,
  MainImage,
NavigationTips,
  Free
} from './maininfo.styled';

const MainSectionComponent = () => {
  return (
    <MainSection>
        <LeftContent>
          <NavigationTips>Головна-Бібліотека ігор</NavigationTips>    
        <SectionTitle>НАША БІБЛІОТЕКА ТОПОВИХ ІГОР</SectionTitle>
        <SectionText>
          Оберіть гру з нашої бібліотеки і почніть грати <Free>безкоштовно 30 хвилин</Free>
        </SectionText>
      </LeftContent>
      <RightContent>
        <ImageContainer>
          <MainImage
            src="https://res.cloudinary.com/teamprojectavatar/image/upload/v1700396948/TestTask/iixaw4qe7sr5islc0dzg.png"
            alt="Game Library"
          />
        </ImageContainer>
      </RightContent>
    </MainSection>
  );
};

export default MainSectionComponent;
