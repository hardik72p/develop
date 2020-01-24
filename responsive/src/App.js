import React from 'react';
import logo from './logo.svg';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import './mysass.scss'

function App() {
  return (
    <div className="main-container">      
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
