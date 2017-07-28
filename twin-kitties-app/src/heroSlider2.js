import React, { Component } from 'react';
import './styles/heroslider.css';
import SlideOne from './heroSlides/slideOne.js'
import SlideTwo from './heroSlides/slideTwo.js'
import SlideThree from './heroSlides/slideThree.js'

class HeroSlider2 extends Component {

  constructor() {
    super();

    this.state = {
      showComments: false
    };
  }
  render() {
    let buttonText = 'show comments';

    if (this.state.showComments) {
      buttonText= "hide comments";
    }



    return (
      <div className="containerFixed">
      <h1>hi</h1>
        <div className="slidesContainer">
          <div className="pawRight"></div>
          <div className="pawLeft"></div>

          <div className="arrow-left">
             <div className="arrow-line-north"></div>
             <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
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

  _handleClick() {
      this.setState({
        showComments: !this.state.showComments
      });
  }

}




export default HeroSlider2;

// on arrow click, add 1 to counter, while counter is < 2,
