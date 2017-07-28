import React, { Component } from 'react';
import './styles/heroslider.css';
import SlideOne from './heroSlides/slideOne.js'
import SlideTwo from './heroSlides/slideTwo.js'
import SlideThree from './heroSlides/slideThree.js'

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


          <SlideThree />
          </div>
      </div>
    );
  }
}

export default HeroSlider;
