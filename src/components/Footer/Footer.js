import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

const FooterSection = styled.footer`
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  padding: 4.5rem 0 4rem 0;
  font-size: 0.95rem;
  @media (max-width: 700px) {
    padding: 2rem 0 1.5rem 0;
  }
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  @media (max-width: 900px) {
    gap: 1.5rem;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 0 1rem;
  }
`;

const FooterCol = styled.div`
  flex: 1 1 200px;
  min-width: 180px;
  @media (max-width: 700px) {
    width: 100%;
    min-width: unset;
    text-align: center;
  }
`;

const FooterColLogo = styled.div`
  flex: 1 1 200px;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 700px) {
    width: 100%;
    min-width: unset;
    text-align: center;
    justify-content: flex-start;
  }
`;

const FooterColContent = styled.div`
  flex: 1 1 200px;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: -2rem;
  @media (max-width: 900px) {
    margin-top: -1rem;
  }
  @media (max-width: 700px) {
    width: 100%;
    min-width: unset;
    text-align: center;
    margin-top: 0;
  }
`;

const FooterLogo = styled.img`
  height: 63px;
  width: 216px;
  margin-left: -10px;
  object-fit: contain;
  display: block;
  margin-bottom: 1rem;
  @media (max-width: 700px) {
    height: 50px;
    width: auto;
    margin-bottom: 0.7rem;
    margin-left: 0;
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1rem;
  @media (max-width: 700px) {
    justify-content: center;
    gap: 0.5rem;
  }
`;

const SocialIcon = styled.a`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #8B941F;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  &:hover {
    background: #7A821B;
  }
  svg {
    width: 18px;
    height: 14px;
    color: #fff;
    display: block;
  }
  @media (max-width: 700px) {
    width: 24px;
    height: 24px;
    svg {
      width: 16px;
      height: 12px;
    }
  }
`;

const FooterTitle = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.05rem;
  margin-bottom: 0.7rem;
  margin-top: 0;
  @media (max-width: 700px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
  @media (max-width: 700px) {
    margin-bottom: 0.5rem;
  }
`;

const FooterListItem = styled.li`
  margin-bottom: 0.6rem;
  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  @media (max-width: 700px) {
    margin-bottom: 0.4rem;
  }
`;

const Copyright = styled.div`
  text-align: left;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.9rem;
  margin-top: 0;
  @media (max-width: 700px) {
    text-align: center;
    font-size: 0.85rem;
  }
`;

const StoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 700px) {
    gap: 0.8rem;
  }
`;

const StoreName = styled.div`
  font-weight: bold;
  margin-bottom: -10px;
  @media (max-width: 700px) {
    margin-bottom: 0.6rem;
  }
`;

const StoreAddress = styled.div`
  margin-bottom: 1rem;
  width: 105%;
  @media (max-width: 700px) {
    margin-bottom: 0.8rem;
  }
`;

const StoreHours = styled.div`
  margin-bottom: 1rem;
  @media (max-width: 700px) {
    margin-bottom: 0.8rem;
  }
`;

const StoreHoursLabel = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
  @media (max-width: 700px) {
    margin-bottom: 0.4rem;
  }
`;

const StorePhone = styled.div`
  margin-bottom: 1rem;
  @media (max-width: 700px) {
    margin-bottom: 0.8rem;
  }
`;

const StorePhoneLabel = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
  @media (max-width: 700px) {
    margin-bottom: 0.4rem;
  }
`;

export default function Footer() {
  return (
    <FooterSection>
      <FooterWrapper>
        <FooterColLogo>
          <FooterLogo src={logo} alt="ProFatto logo" />
          <Socials>
            <SocialIcon href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none"><path d="M15.5 8.5H13.5V7.5C13.5 7.22386 13.7239 7 14 7H15.5V4.5H14C12.6193 4.5 11.5 5.61929 11.5 7V8.5H10V11H11.5V19.5H13.5V11H15L15.5 8.5Z" fill="currentColor" /></svg>
            </SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" /><rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
            </SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" /><path d="M8 11V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="8" cy="8" r="1" fill="currentColor" /><path d="M12 16V13C12 12.4477 12.4477 12 13 12H15C15.5523 12 16 12.4477 16 13V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            </SocialIcon>
            <SocialIcon href="#" aria-label="YouTube">
              <svg viewBox="0 0 18 14" fill="none"><rect x="1" y="1" width="16" height="12" rx="5" stroke="currentColor" strokeWidth="2" /><path d="M7 5L12 7L7 9V5Z" fill="currentColor" /></svg>
            </SocialIcon>
          </Socials>
          <Copyright>
            Copyright © {new Date().getFullYear()} ProFatto
          </Copyright>
        </FooterColLogo>
        <FooterColContent>
          <FooterTitle>MAPA DO SITE</FooterTitle>
          <FooterList>
            <FooterListItem><a href="#">HOME</a></FooterListItem>
            <FooterListItem><a href="#">SOBRE NÓS</a></FooterListItem>
            <FooterListItem><a href="#">TENDÊNCIAS</a></FooterListItem>
            <FooterListItem><a href="#">PROJETOS QUE INSPIRAM</a></FooterListItem>
            <FooterListItem><a href="#">ESPERIENZAFATTO</a></FooterListItem>
            <FooterListItem><a href="#">MARCAS E PRODUTOS</a></FooterListItem>
            <FooterListItem><a href="#">CONTATO</a></FooterListItem>
          </FooterList>
        </FooterColContent>
        <FooterColContent>
          <FooterTitle>LOJA 01</FooterTitle>
          <StoreInfo>
            <StoreName>ProFatto Florianópolis - SC</StoreName>
            <StoreAddress>R. Antônio Carlos Ferreira, 219 - Agronômica Florianópolis/SC - 88025-211</StoreAddress>
            <StoreHours>
              <StoreHoursLabel>Horário de atendimento:</StoreHoursLabel>
              Seg a Sex 09h às 18h | Sábado 09h às 13h
            </StoreHours>
            <StorePhone>
              <StorePhoneLabel>Telefone:</StorePhoneLabel>
              (48) 3113-2600
            </StorePhone>
          </StoreInfo>
        </FooterColContent>
        <FooterColContent>
          <FooterTitle>LOJA 02</FooterTitle>
          <StoreInfo>
            <StoreName>ProFatto São José - SC</StoreName>
            <StoreAddress>R. Koesa, 247 - Kobrasol, São José/SC, 88102-310</StoreAddress>
            <StoreHours>
              <StoreHoursLabel>Horário de atendimento:</StoreHoursLabel>
              Seg a Sex 09h às 18h | Sábado 09h às 13h
            </StoreHours>
            <StorePhone>
              <StorePhoneLabel>Telefone:</StorePhoneLabel>
              (48) 3113-2600
            </StorePhone>
          </StoreInfo>
        </FooterColContent>
      </FooterWrapper>
    </FooterSection>
  );
}