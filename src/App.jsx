import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import Intro from './components/Intro';
import Car from './components/Car';
import Activity from './components/Activity';
import ReadVideoExplanations from './components/RealVideoExplanation';
import FurtherReading from './components/FurtherReading';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppStyles = styled.div`
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppStyles>
        <section><Intro /></section>
        <section><Car /></section>
        <section><Activity /></section>
        <section><ReadVideoExplanations /></section>
        <section><FurtherReading /></section>
        <section><Contact /></section>
        <section><Footer /></section>
      </AppStyles>
    </ThemeProvider>
  );
}

export default App;
