import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 0 0.5rem 0;
  @media (max-width: 768px) {
    padding: 0.5rem 1rem 0.3rem 1rem;
  }
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const LogoImg = styled.img`
  height: 63px;
  width: 216px;
  object-fit: contain;
  display: block;
  @media (max-width: 768px) {
    height: 40px;
    width: 140px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 3rem;
  list-style: none;
  align-items: center;
  min-width: 0;
  width: auto;
  @media (max-width: 900px) {
    gap: 2rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    background: ${({ theme }) => theme.colors.dark};
    position: absolute;
    top: 100px;
    left: 0;
    z-index: 10;
    padding: 1rem 0;
    gap: 0.5rem;
  }
`;

export const MenuItem = styled.li`
  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-weight: 500;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    width: 100%;
    text-align: center;
  }
`;

export const RightArea = styled.div`
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

export const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

export const WppIcon = styled.img`
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

export const Phone = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  vertical-align: middle;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  @media (max-width: 768px) {
    gap: 0.4rem;
  }
`;

export const SocialIcon = styled.a`
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
  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    svg {
      width: 16px;
      height: 12px;
    }
  }
`;

export const ContactButton = styled.a`
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
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.25rem 0.8rem;
    margin-left: 0.5rem;
  }
`;

export const Hamburger = styled.div`
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

export const Bar = styled.div`
  width: 24px;
  height: 3px;
  background: ${({ theme }) => theme.colors.white};
  margin: 3px 0;
  border-radius: 2px;
`;