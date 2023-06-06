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
  return (
    <div>
      <div className="container">
        <Carousel
          renderButtonGroupOutside={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          swipeable={true}
          draggable={false}
          infinite={true}
          responsive={responsive}
          showDots={false}
        >
          {children.map((children) => {
            return <div>{children}</div>;
          })}
        </Carousel>
      </div>
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
