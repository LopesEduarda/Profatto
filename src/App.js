import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Hero>
        <Header />
      </Hero>
      <About />
      <HowItWorks />
      <Newsletter />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
