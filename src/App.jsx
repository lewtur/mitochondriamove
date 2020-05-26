import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import Intro from './components/Intro';
import Car from './components/Car';
import Activity from './components/Activity';

const AppStyles = styled.div`
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppStyles>
        <section><Intro /></section>
        <section><Car /></section>
        <section><Activity /></section>
      </AppStyles>
    </ThemeProvider>
  );
}

export default App;
