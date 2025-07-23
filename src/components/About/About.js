import React from 'react';
import ambiente2 from '../../assets/ambiente2.png';
import {
  AboutSection,
  AboutImage,
  AboutContent,
  AboutTitle,
  AboutText,
  Stats,
  Stat,
  ButtonWrapper,
  SaibaMaisButton
} from './styles/About.styles';

export default function About() {
  return (
    <AboutSection>
      <AboutImage src={ambiente2} alt="ProFatto ambiente" />
      <AboutContent>
        <AboutTitle>
          <span style={{ color: '#333', fontWeight: '500' }}>Sobre</span>{' '}
          <span style={{ color: '#8B941F', fontWeight: '480' }}>Nós</span>
        </AboutTitle>
        <AboutText>
          A ProFatto é especialista em revestimentos e louças de alto padrão, oferecendo soluções exclusivas para projetos residenciais e comerciais. Com anos de experiência no mercado, nossa equipe está comprometida em proporcionar produtos de qualidade superior e atendimento personalizado.
        </AboutText>
        <AboutText>
          Trabalhamos com as melhores marcas do mercado, garantindo que cada projeto reflita a excelência e sofisticação que nossos clientes merecem. Nossa missão é transformar ambientes através de produtos que unem beleza, funcionalidade e durabilidade.
        </AboutText>
        <Stats>
          <Stat>

            +250
            <span>FORNECEDORES</span>
          </Stat>
          <Stat>

            +1000
            <span>CLIENTES</span>
          </Stat>
          <Stat>

            +2000
            <span>REVESTIMENTOS</span>
          </Stat>
          <Stat>

            +1000
            <span>CLIENTES</span>
          </Stat>
        </Stats>
        <ButtonWrapper>
          <SaibaMaisButton>SAIBA MAIS</SaibaMaisButton>
        </ButtonWrapper>
      </AboutContent>
    </AboutSection>
  );
}