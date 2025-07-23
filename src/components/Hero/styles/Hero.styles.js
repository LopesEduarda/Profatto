import styled from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
  height: 500px;
  background: url(${({ currentImage }) => currentImage}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.white};
  transition: background 0.5s ease;
  @media (max-width: 768px) {
    height: 300px;
    padding: 0 1rem;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(35,50,43,0.95) 0%, rgba(35,50,43,0.7) 40%, rgba(35,50,43,0.0) 100%);
  z-index: 1;
`;

export const HeroHeaderWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin-top: 40px;
    padding: 0 1rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  position: relative;
  text-align: center;
  max-width: 90%;
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 2px;
    background: ${({ theme }) => theme.colors.white};
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 2px;
    background: ${({ theme }) => theme.colors.white};
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    max-width: 100%;
    &::before, &::after {
      width: 100px;
      top: -10px;
      bottom: -10px;
    }
  }
`;

export const CarouselIndicators = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 3;
  @media (max-width: 768px) {
    bottom: 20px;
    gap: 6px;
  }
`;

export const Indicator = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ active }) => active ? '#8B941F' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: background 0.3s ease;
  @media (max-width: 768px) {
    width: 6px;
    height: 6px;
  }
`;