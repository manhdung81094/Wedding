import React from 'react';
import Navigation from './Components/Navigation';
import Date from './Components/Date';
import Event from './Components/Event';
import Story from './Components/Story';
import Header from './Components/Header';
import Test from './Components/test';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Story />
      <Date />
      <Event />
      {/* <Test /> */}
    </>
  );
}

export default App;
