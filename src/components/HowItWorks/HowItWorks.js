import React from 'react';
import {
  Section,
  Title,
  Cards,
  Card,
  Number,
  CardContent,
  CardTitle,
  CardText
} from './styles/HowItWorks.styles';

export default function HowItWorks() {
  return (
    <Section>
      <Title>
        <span style={{ color: '#333', fontWeight: '450' }}>Como a</span>{' '}
        <span style={{ color: '#8B941F', fontWeight: '500' }}>ProFatto</span>{' '}
        <span style={{ color: '#333', fontWeight: '450' }}>pode te ajudar</span>
      </Title>
      <Cards>
        <Card>
          <Number>1</Number>
          <CardContent>
            <CardTitle>Diagnóstico Personalizado</CardTitle>
            <CardText>Entendemos as necessidades únicas do seu negócio. Avaliamos seu cenário atual e criamos estratégias sob medida para impulsionar resultados reais.</CardText>
          </CardContent>
        </Card>
        <Card>
          <Number>2</Number>
          <CardContent>
            <CardTitle>Planejamento Estratégico</CardTitle>
            <CardText>Desenvolvemos um plano de ação eficiente, focado em objetivos claros e etapas bem definidas para garantir crescimento e sustentabilidade.</CardText>
          </CardContent>
        </Card>
        <Card>
          <Number>3</Number>
          <CardContent>
            <CardTitle>Implementação</CardTitle>
            <CardText>Colocamos o plano em prática com agilidade, monitorando os resultados em tempo real e ajustando a rota sempre que necessário.</CardText>
          </CardContent>
        </Card>
      </Cards>
    </Section>
  );
}