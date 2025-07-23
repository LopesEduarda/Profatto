import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import wpp from '../../assets/wpp.png';

const HeaderWrapper = styled.header`
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 0 0.5rem 0;
  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;

const Nav = styled.nav`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

const LogoImg = styled.img`
  height: 63px;
  width: 216px;
  object-fit: contain;
  display: block;
  @media (max-width: 768px) {
    height: 40px;
    width: auto;
  }
`;

const RightArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;
  margin-left: 2rem;
  @media (max-width: 900px) {
    margin-left: 1rem;
  }
  @media (max-width: 768px) {
    margin-left: 0;
    gap: 0.8rem;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

const WppIcon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
  margin-right: 0.3rem;
  vertical-align: middle;
  @media (max-width: 768px) {
    width: 14px;
    height: 14px;
    margin-right: 0.2rem;
  }
`;

const Phone = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  vertical-align: middle;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  @media (max-width: 768px) {
    gap: 0.4rem;
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
`;

const ContactButton = styled.a`
  background: #8B941F;
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  padding: 0.3rem 1.0rem;
  margin-left: 0.7rem;
  text-decoration: none;
  transition: background 0.2s;
  display: inline-block;
  letter-spacing: 0.5px;
  &:hover {
    background: #7A821B;
  }
`;

const MenuRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.1rem;
`;

const Menu = styled.ul`
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 3.5rem;
  list-style: none;
  align-items: center;
  min-width: 0;
  @media (max-width: 900px) {
    gap: 2rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    background: ${({ theme }) => theme.colors.dark};
    position: absolute;
    top: 60px;
    left: 0;
    z-index: 10;
    padding: 1rem 0;
  }
`;

const MenuItem = styled.li`
  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-weight: 500;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  @media (max-width: 768px) {
    padding: 0.7rem 1.5rem;
  }
`;

const Hamburger = styled.div`
  display: none;
  width: 32px;
  height: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 20;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Bar = styled.div`
  width: 24px;
  height: 3px;
  background: ${({ theme }) => theme.colors.white};
  margin: 3px 0;
  border-radius: 2px;
`;

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <HeaderWrapper>
      <Nav>
        <TopRow>
          <LogoImg src={logo} alt="ProFatto logo" />
          <RightArea>
            <PhoneContainer>
              <WppIcon src={wpp} alt="WhatsApp" />
              <Phone>(48) 3207-2222</Phone>
            </PhoneContainer>
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
            <ContactButton href="#">CONTATO</ContactButton>
          </RightArea>
        </TopRow>
        <MenuRow>
          <Menu open={open}>
            <MenuItem><a href="#">Home</a></MenuItem>
            <MenuItem><a href="#">Sobre Nós</a></MenuItem>
            <MenuItem><a href="#">Conteúdos</a></MenuItem>
            <MenuItem><a href="#">Projetos ProFatto</a></MenuItem>
            <MenuItem><a href="#">Vídeos</a></MenuItem>
            <MenuItem><a href="#">ExperiênciaFatto</a></MenuItem>
            <MenuItem><a href="#">Imersão Jacuzzi</a></MenuItem>
          </Menu>
          <Hamburger onClick={() => setOpen((o) => !o)}>
            <Bar />
            <Bar />
            <Bar />
          </Hamburger>
        </MenuRow>
      </Nav>
    </HeaderWrapper>
  );
}