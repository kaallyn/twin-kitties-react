import React, { Component } from 'react';
import './styles/heroslider.css';

class HeroSlider extends Component {
  render() {
    return (
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

        <section className="clearfix slide1">
              <div className="blurb">
                 <h2>Where Cats and Coffee Come to Mingle</h2>
                 <p>Lorem ipsum dolor sit amet, sapien etiam.</p>
                 <a className="button" href="#">Learn More</a>
              </div>
        </section>

      </div>
    );
  }
}

export default HeroSlider;
