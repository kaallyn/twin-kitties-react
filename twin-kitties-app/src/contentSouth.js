import React, { Component } from 'react';
import './styles/footer.css';

class ContentSouth extends Component {
  render() {
    return (
      <section className="clearfix contentSouth">

      <div className="downArrow">
         <div className="box"></div>
         <div className="arrow-down"></div>
         <div className="triangle-up"></div>
         <div className="rectangle"></div>
      </div>
            <div className="why centered">
               <h2>Why Twin Kitties</h2>
               <p>Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu massa vestibulum malesuada, integer vivamus elit eu mauris eu, cum eros quis aliquam nisl wisi.</p>

               <div className="why-c1">
                  <img src={require("./img/coffee-icon.png")} alt="coffee"  width="80%" />
                  <div className="column-desc">
                     <p>Lorem ipsum dolor sit amet, sapien etiam, nunc.</p>
                  </div>
               </div>
               <div className="why-c2">
                  <img src="img/cat-icon.png" alt="Smiley face"  width="80%" />
                  <div className="column-desc">
                     <p>Lorem ipsum dolor sit amet, sapien etiam, nunc.</p>
                  </div>
               </div>

               <div className="why-c3">
                  <img src="img/heart-icon.png" alt="Smiley face"  width="80%" />
                  <div className="column-desc">
                     <p>Lorem ipsum dolor sit amet, sapien etiam, nunc.</p> </div>
               </div>

               <a className="button" href="404-2.html">Learn More</a>
            </div>

            <div className="cats-container">
               <div className="cats-content centered">
                  <h2>Meet Adoptable Cats</h2>


                  <div className="cat-c1">
                     <div className="cat-pic">
                        <img src="img/mimi-square-small.png"  width="100%" />
                     </div>
                     <h3>Mimi</h3>
                     <div className="column-desc">
                        <p>Lorem ipsum dolor sit amet, sapien etiam, nunc.</p> </div>
                  </div>

                  <div className="cat-c2">
                     <div className="cat-pic">
                        <img src="img/PAWS_New_Site__51_of_201__01-square.jpg"  width="100%" />
                     </div>
                     <h3>Cat Name</h3>
                     <div className="column-desc">
                        <p>Lorem ipsum dolor sit amet, sapien etiam, nunc.</p> </div>
                  </div>
                  <a className="button" href="cats.html">Learn More</a>

               </div>
            </div>


      </section>
    );
  }
}

export default ContentSouth;
