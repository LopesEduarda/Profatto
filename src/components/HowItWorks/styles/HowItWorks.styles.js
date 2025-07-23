import styled from 'styled-components';

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.white};
  padding: 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    padding: 1rem 0;
  }
  @media (max-width: 600px) {
    padding: 0.8rem 0;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  width: 100%;
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  @media (max-width: 1200px) {
    gap: 2.5rem;
    padding: 0 1.5rem;
  }
  @media (max-width: 900px) {
    gap: 2rem;
    padding: 0 1rem;
  }
  @media (max-width: 768px) {
    gap: 1rem;
    padding: 0 1rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.2rem;
    width: 100%;
    padding: 0 1rem;
  }
`;

export const Card = styled.div`
  border-radius: 8px;
  padding: 2rem 1.5rem;
  flex: 1;
  min-width: 380px;
  max-width: 420px;
  text-align: center;
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    min-width: 350px;
    max-width: 380px;
    padding: 1.8rem 1.2rem;
    gap: 2rem;
  }
  @media (max-width: 900px) {
    min-width: 320px;
    max-width: 350px;
    padding: 1.5rem 1rem;
    gap: 1.5rem;
  }
  @media (max-width: 768px) {
    min-width: 280px;
    max-width: 320px;
    padding: 1rem 0.8rem;
    gap: 1rem;
  }
  @media (max-width: 600px) {
    min-width: unset;
    max-width: 100%;
    width: 100%;
    padding: 0.4rem;
    gap: 0.4rem;
  }
`;

export const Number = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  width: 58px;
  height: 58px;
  border-radius: 50%;
  margin-right: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.8rem;
  flex-shrink: 0;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }
  @media (max-width: 600px) {
    width: 36px;
    height: 36px;
    font-size: 1.3rem;
    margin-right: 0.5rem;
  }
`;

export const CardContent = styled.div`
  flex: 1;
  text-align: left;
  min-width: 0;
  @media (max-width: 768px) {
    min-width: 0;
    flex: 1;
  }
  @media (max-width: 600px) {
    min-width: 0;
    flex: 1;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  white-space: normal;
  overflow: visible;
  text-overflow: clip;
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 0.1rem;
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
  }
`;

export const CardText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  width: 300px;
  line-height: 1.4;
  word-wrap: break-word;
  hyphens: auto;
  @media (max-width: 768px) {
    font-size: 0.85rem;
    width: auto;
    line-height: 1.3;
    word-break: break-word;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
    line-height: 1.2;
    word-break: break-word;
    hyphens: auto;
  }
`;