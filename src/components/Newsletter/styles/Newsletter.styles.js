import styled from 'styled-components';

export const NewsletterSection = styled.section`
  background: #8B941F;
  height: 160px;
  min-height: 160px;
  max-height: 160px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: 900px) {
    height: auto;
    min-height: unset;
    max-height: unset;
    padding: 1.5rem 0 1rem 0;
  }
  @media (max-width: 768px) {
    padding: 1.5rem 0 1.2rem 0;
  }
`;

export const NewsletterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;
    justify-content: center;
  }
  @media (max-width: 768px) {
    gap: 0.8rem;
    padding: 0 1rem;
    align-items: center;
  }
`;

export const NewsletterInfo = styled.div`
  flex: 1;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  align-items: flex-start;
  padding-top: 0.2rem;
  @media (max-width: 900px) {
    align-items: flex-start;
    height: auto;
    padding-top: 0;
  }
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const NewsletterTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: -20px;
  margin-bottom: 0.1rem;
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: 900px) {
    font-size: 1.1rem;
    margin-bottom: 0.2rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.1rem;
  }
`;

export const NewsletterText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  @media (max-width: 900px) {
    font-size: 0.9rem;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 1.2rem;
  flex: 2;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    width: 100%;
  }
  @media (max-width: 768px) {
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }
`;

export const Input = styled.input`
  padding: 0.7rem 1rem;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  width: 260px;
  background: #F5F5ED;
  color: #333;
  @media (max-width: 1200px) {
    width: 180px;
  }
  @media (max-width: 900px) {
    width: 80%;
    max-width: 300px;
    font-size: 0.9rem;
    padding: 0.6rem 0.8rem;
  }
  @media (max-width: 768px) {
    width: 90%;
    max-width: 280px;
    padding: 0.4rem 0.7rem;
    font-size: 0.85rem;
  }
`;

export const Button = styled.button`
  background: #1A3327;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 0.7rem 2.2rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
  letter-spacing: 0.5px;
  &:hover {
    background: #23322B;
  }
  @media (max-width: 900px) {
    width: 80%;
    max-width: 300px;
    padding: 0.6rem 0;
    font-size: 0.9rem;
  }
  @media (max-width: 768px) {
    width: 90%;
    max-width: 280px;
    margin: 0 auto;
    padding: 0.4rem 0;
    font-size: 0.8rem;
  }
`;