import React, { Component } from 'react';
import './App.css';
import './styles/fonts.css';
import Header from './header.js';
import Footer from './footer.js';
import HeroSlider2 from './heroSlider2.js';
import ContentSouth from './contentSouth.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <HeroSlider2 />
        <ContentSouth />

      </div>
    );
  }
}

export default App;
