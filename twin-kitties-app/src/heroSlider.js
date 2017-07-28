import React, { Component } from 'react';
import './styles/heroslider.css';
import SlideOne from './heroSlides/slideOne.js'

class HeroSlider extends Component {
  render() {
    return (
      <div className="containerFixed">
        <div className="slidesContainer">
          <div className="pawRight"></div>
          <div className="pawLeft"></div>

          <div className="arrow-left">
             <div className="arrow-line-north"></div>
             <div className="arrow-line-south"></div>
          </div>

          <div className="arrow-right">
             <div className="arrow-line-north"></div>
             <div className="arrow-line-south"></div>
          </div>

          <SlideOne />
          </div>
      </div>
    );
  }
}

export default HeroSlider;
