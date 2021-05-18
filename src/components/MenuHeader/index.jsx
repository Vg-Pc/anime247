import React from "react";
import ReactDOM from "react-dom";

import InfiniteCarousel from "react-leaf-carousel";

function MenuHeader() {
  const listOptions1 = () => {
    let options1 = [];
    for (let i = 0; i < 20; i++) {
      options1.push({
        name: `The anime name ${i + 1}`,
        id: i + 1,
      });
    }
    return options1;
  };

  const data = listOptions1().map((item, index) => {
    return (
      <div className="scroll__item" key={index}>
        <div className="scroll__avt"></div>
        {item.name}
      </div>
    );
  });
  return (
    <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 757,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 921,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
          },
        },

        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },

        {
          breakpoint: 1320,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
          },
        },
      ]}
      dots={false}
      showSides={true}
      sidesOpacity={0.5}
      sideSize={0.1}
      slidesToScroll={4}
      slidesToShow={5}
      scrollOnDevice={true}
    >
      {data}
    </InfiniteCarousel>
  );
}

export default MenuHeader;
