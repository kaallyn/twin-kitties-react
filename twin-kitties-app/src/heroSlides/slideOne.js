import React, { Component } from 'react';
import '../styles/heroslides.css';

class SlideOne extends Component {
  render() {
    return (

        <section className="clearfix slide1">
              <div className="blurb">
                 <h2>Where Cats and Coffee Come to Mingle</h2>
                 <p>Lorem ipsum dolor sit amet, sapien etiam.</p>
                 <a className="button" href="#">Learn More</a>
              </div>
        </section>


    );
  }
}

export default SlideOne;
