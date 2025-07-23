import React from 'react';
import {
  NewsletterSection,
  NewsletterWrapper,
  NewsletterInfo,
  NewsletterTitle,
  NewsletterText,
  Form,
  Input,
  Button
} from './styles/Newsletter.styles';

export default function Newsletter() {
  return (
    <NewsletterSection>
      <NewsletterWrapper>
        <NewsletterInfo>
          <NewsletterTitle>NEWSLETTER</NewsletterTitle>
          <NewsletterText>Cadastre-se e saiba em primeira mão as nossas principais novidades.</NewsletterText>
        </NewsletterInfo>
        <Form>
          <Input type="text" placeholder="Cadastre seu nome" />
          <Input type="email" placeholder="Cadastre seu email" />
          <Button type="submit">CADASTRAR</Button>
        </Form>
      </NewsletterWrapper>
    </NewsletterSection>
  );
}