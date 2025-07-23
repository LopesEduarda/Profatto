import styled from 'styled-components';

export const AboutSection = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem 0 2rem 0;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: 2rem 2rem 2rem 3.5rem;
  @media (max-width: 1300px) {
    margin-left: 1rem;
    margin-right: 1rem;
    padding-left: 1.5rem;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 1.5rem;
    gap: 1.5rem;
    margin-left: 0;
    margin-right: 0;
  }
  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
    margin: 1rem 0;
  }
`;

export const AboutImage = styled.img`
  width: 755px;
  height: 502px;
  object-fit: cover;
  border-radius: 8px;
  @media (max-width: 900px) {
    width: 100%;
    height: 250px;
  }
  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const AboutContent = styled.div`
  flex: 1;
`;

export const AboutTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 130px;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: 900px) {
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    &::after {
      width: 100px;
    }
  }
`;

export const AboutText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
  margin-top: 1rem;
  @media (max-width: 900px) {
    font-size: 0.95rem;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    margin-top: 0.8rem;
  }
`;

export const Stats = styled.div`
  display: flex;
  gap: 0.7rem;
  margin-top: 1rem;
  @media (max-width: 600px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

export const Stat = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  font-size: 1.4rem;
  min-width: 100px;
  span {
    display: block;
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.9rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    min-width: 80px;
    span {
      font-size: 0.8rem;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const SaibaMaisButton = styled.button`
  background: #8B941F;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  letter-spacing: 0.5px;
  width: 122px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #7A821B;
  }
  @media (max-width: 768px) {
    width: 110px;
    height: 36px;
    font-size: 0.75rem;
  }
`;