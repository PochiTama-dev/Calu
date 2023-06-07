import React from "react";
import "./slider.css";
import arrow_L from "./icon_arrow_left.svg";
import arrow_R from "./icon_arrow_right.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Slider({ children }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
    },
  };
  const CustomLeftArrow = ({ onClick }) => (
    <div onClick={onClick}>
      <img src={arrow_L} alt=" <= " className="arrowL" />
    </div>
  );

  const CustomRightArrow = ({ onClick }) => (
    <div onClick={onClick}>
      <img src={arrow_R} alt=" => " className="arrowR" />
    </div>
  );
  return (
    <div className="container">
      <Carousel
        containerClass="carousel-container"
        renderButtonGroupOutside={true}
        swipeable={true}
        draggable={false}
        infinite={true}
        responsive={responsive}
        showDots={false}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        itemClass="carouselItem"
      >
        {children.map((children, index) => {
          return <div key={index}>{children}</div>;
        })}
      </Carousel>
    </div>
  );
}

/*{
   return (
   <div className="container">
      <button className="btn_arr">
        <img className="arrow" src={arrow_L} />
      </button>
      {children.map((children, index) => {
        return <div>{children}</div>;
      })}
      <button className="btn_arr">
        <img className="arrow" src={arrow_R} />
      </button>
      </div>
      );
      
    }*/
export default Slider;
