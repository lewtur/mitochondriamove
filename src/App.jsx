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
import Buildup from './components/Buildup';

const AppStyles = styled.div`
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppStyles>
        <section><Intro /></section>
        <section className="section-pad"><Car /></section>
        <section className="section-pad"><Buildup /></section>
        <section className="section-pad"><Activity /></section>
        <section className="section-pad"><ReadVideoExplanations /></section>
        <section className="section-pad"><FurtherReading /></section>
        <section className="section-pad"><Contact /></section>
        <section className="section-pad"><Footer /></section>
      </AppStyles>
    </ThemeProvider>
  );
}

export default App;
