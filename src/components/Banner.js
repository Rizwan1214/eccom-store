import React from "react";
import Slider from "react-slick";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.jpg";
import banner5 from "../assets/images/banner5.jpg";
import banner6 from "../assets/images/banner6.jpg";

const Banner = () => {
  const slidingContent = [
    {
      id: 1,
      slide: banner1,
    },
    {
      id: 2,
      slide: banner2,
    },
    {
      id: 3,
      slide: banner3,
    },
    {
      id: 4,
      slide: banner4,
    },
    {
      id: 5,
      slide: banner5,
    },
    {
      id: 6,
      slide: banner6,
    },
  ];
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="banner">
      <Slider {...settings}>
        {slidingContent.map((val) => {
          return (
            <div key={val.id}>
              <img
                src={val.slide}
                alt="SliderImage"
                style={{ width: "100%", height: "650px" }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;
