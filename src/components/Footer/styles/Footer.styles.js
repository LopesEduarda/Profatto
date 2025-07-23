import styled from 'styled-components';

export const FooterSection = styled.footer`
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  padding: 4.5rem 0 4rem 0;
  font-size: 0.95rem;
  @media (max-width: 700px) {
    padding: 2rem 0 1.5rem 0;
  }
`;

export const FooterWrapper = styled.div`
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

export const FooterCol = styled.div`
  flex: 1 1 200px;
  min-width: 180px;
  @media (max-width: 700px) {
    width: 100%;
    min-width: unset;
    text-align: center;
  }
`;

export const FooterColLogo = styled.div`
  flex: 1 1 200px;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: 700px) {
    width: 100%;
    min-width: unset;
    text-align: center;
    justify-content: flex-start;
  }
`;

export const FooterColContent = styled.div`
  flex: 1 1 200px;
  min-width: 180px;
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

export const FooterLogo = styled.img`
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

export const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1rem;
  @media (max-width: 700px) {
    justify-content: center;
    gap: 0.5rem;
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
  @media (max-width: 700px) {
    width: 24px;
    height: 24px;
    svg {
      width: 16px;
      height: 12px;
    }
  }
`;

export const FooterTitle = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.05rem;
  margin-bottom: 0.7rem;
  margin-top: 0;
  @media (max-width: 700px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
  @media (max-width: 700px) {
    margin-bottom: 0.5rem;
  }
`;

export const FooterListItem = styled.li`
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

export const Copyright = styled.div`
  text-align: left;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.9rem;
  margin-top: 0;
  @media (max-width: 700px) {
    text-align: center;
    font-size: 0.85rem;
  }
`;