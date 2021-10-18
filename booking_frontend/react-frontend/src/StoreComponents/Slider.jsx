import React, { Component } from "react";
import SliderImage from "./SliderImage";
import M from "materialize-css";

class Slider extends Component {
  componentDidMount() {
    const elems = document.querySelectorAll(".slider");
    M.Slider.init(elems, {
      indicators: false,
      height: 500,
      width:"100%",
      transition: 500,
      interval: 6000,
    });
  }

  render() {
    return (
      <div className="slider test">
        <ul className="slides">
          <SliderImage
            image={
              "baloons1.jpg"
              
            }
            /* title={"Clasped with class"}
            description={
              "Stylish bracelets that put you in a class of your own."
            }
            classPosition={"caption right-align"} */
          />
          <SliderImage
            image={
              "trop.png"
            }
           /* title={"Jewellery"}
            description={
              "Find your perfect jewellery piece to mark your special moment."
            }
            classPosition={"caption center-align"}*/
            
          />
          <SliderImage
            image={
              "tb.jpg"
            }
              /*title={"Rings that bind time"}
            description={"Here's our small slogan."}
            classPosition={"caption left-align"}*/
          />
          <SliderImage
            image={
              "holloween.jpg"
            }
             /* title={"Hanging art"}
            description={
              "Pendants that are modern art or spiritual symbols, includes a range of Dhammachackras and Crosses."
            }
          classPosition={"caption center-align"}*/
          />
        </ul>
      </div>
    );
  }
}

export default Slider;
