# 🏠 ProFatto - Revestimentos e Louças de Alto Padrão

![ProFatto Logo](src/assets/logo.png)

## 📋 Descrição do Projeto

O **ProFatto** é um site institucional moderno e responsivo desenvolvido para uma empresa especializada em revestimentos e louças de alto padrão. O projeto apresenta uma interface elegante e profissional, focada em converter visitantes em clientes através de uma experiência de usuário excepcional.

### 🎯 Objetivos do Projeto

- **Apresentação Institucional**: Mostrar a expertise da ProFatto no mercado de revestimentos
- **Conversão de Leads**: Capturar informações de potenciais clientes através do newsletter
- **Responsividade**: Garantir experiência otimizada em todos os dispositivos
- **Performance**: Site rápido e otimizado para SEO

## 🚀 Tecnologias Utilizadas

- **React 19.1.0** - Biblioteca JavaScript para construção de interfaces
- **Styled Components 6.1.19** - CSS-in-JS para estilização componentizada
- **React Scripts 5.0.1** - Scripts de build e desenvolvimento
- **Workbox** - Service Workers para PWA (Progressive Web App)

## 📱 Funcionalidades Principais

### 🎨 Design System
- **Paleta de Cores**: Verde oliva (#8B941F) como cor primária
- **Tipografia**: Fonte Anek Telugu para uma aparência moderna
- **Layout Responsivo**: Adaptação perfeita para desktop, tablet e mobile

### 🧩 Componentes Principais

#### 1. **Header**
- Logo da empresa
- Menu de navegação responsivo
- Informações de contato (WhatsApp)
- Redes sociais
- Botão de contato

#### 2. **Hero Section**
- Carrossel de imagens automático
- Título principal da empresa
- Indicadores de navegação

#### 3. **About Section**
- Seção institucional da empresa
- Informações sobre produtos e serviços

#### 4. **How It Works**
- Processo em 3 etapas:
  - **Diagnóstico Personalizado**
  - **Planejamento Estratégico**
  - **Implementação**
- Cards numerados com design moderno

#### 5. **Newsletter**
- Formulário de captura de leads
- Campos para nome e email
- Design responsivo otimizado para mobile

#### 6. **Footer**
- Informações da empresa
- Links úteis
- Redes sociais
- Copyright

## 🖼️ Screenshots do Projeto

### Desktop View
<!--
[INSERIR SCREENSHOT DESKTOP AQUI]
- Tela principal com header, hero section e navegação
- Layout completo mostrando todos os componentes
-->

### Tablet View
<!--
[INSERIR SCREENSHOT TABLET AQUI]
- Adaptação responsiva para tablets
- Menu e componentes otimizados
-->

### Mobile View
<!--
[INSERIR SCREENSHOT MOBILE AQUI]
- Layout mobile otimizado
- Cards do "How It Works" com espaçamento reduzido
- Newsletter centralizado
-->

### Componentes Específicos
<!--
[INSERIR SCREENSHOTS DOS COMPONENTES AQUI]
- Header com menu mobile
- Hero section com carrossel
- Cards do processo de trabalho
- Formulário de newsletter
- Footer completo
-->

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos para Instalação

1. **Clone o repositório**
```bash
git clone [URL_DO_REPOSITORIO]
cd profatto
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto em modo de desenvolvimento**
```bash
npm start
```

4. **Acesse o projeto**
```
http://localhost:3000
```

### Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm test` - Executa os testes
- `npm run eject` - Ejecta a configuração do Create React App

## 📁 Estrutura do Projeto

```
profatto/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── assets/           # Imagens e recursos
│   ├── components/       # Componentes React
│   │   ├── About/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── HowItWorks/
│   │   └── Newsletter/
│   ├── theme/           # Configuração de tema
│   ├── App.js           # Componente principal
│   └── index.js         # Ponto de entrada
├── package.json
└── README.md
```
