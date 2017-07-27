import React, { Component } from 'react';
import './App.css';
import './styles/fonts.css';
import Header from './header.js';
import Footer from './footer.js';
import HeroSlider from './heroSlider.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <HeroSlider />
        <Footer />

      </div>
    );
  }
}

export default App;