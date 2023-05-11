import React from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, MainButton, Arrowforward } from './HeroElements';
import Video from '../Video/vidoe.mp4';
const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video.mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>Sign up for a new accun today and receive $250 in credit towards your next payment.</HeroP>
        <HeroBtnWrapper>
          <MainButton>
            Get start <Arrowforward />
          </MainButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
