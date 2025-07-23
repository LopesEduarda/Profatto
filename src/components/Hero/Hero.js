import React, { useState } from 'react';
import ambiente from '../../assets/ambiente.png';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import {
  HeroSection,
  Overlay,
  HeroHeaderWrapper,
  HeroContent,
  HeroTitle,
  CarouselIndicators,
  Indicator
} from './styles/Hero.styles';

export default function Hero({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0);


  const images = [ambiente, img1, img2];

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <HeroSection currentImage={images[currentSlide]}>
      <Overlay />
      <HeroHeaderWrapper>{children}</HeroHeaderWrapper>
      <HeroContent>
        <HeroTitle>Revestimentos e Louças de Alto Padrão</HeroTitle>
      </HeroContent>
      <CarouselIndicators>
        <Indicator
          active={currentSlide === 0}
          onClick={() => handleIndicatorClick(0)}
        />
        <Indicator
          active={currentSlide === 1}
          onClick={() => handleIndicatorClick(1)}
        />
        <Indicator
          active={currentSlide === 2}
          onClick={() => handleIndicatorClick(2)}
        />
      </CarouselIndicators>
    </HeroSection>
  );
}