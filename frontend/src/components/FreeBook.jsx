import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function FreeBook() {
  const fiterData = list.filter((data) => data.category === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free offered Courses </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus ad
            sapiente dolore ratione dolores tempore, laudantium nihil sint,
            magnam, aspernatur eius! Esse, minima? Molestias, perferendis.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {fiterData.map((item)=>(
              <Cards data={item} key={item.id}/>
            ))}
          </Slider>
        </div> 
      </div>
    </>
  );
}

export default FreeBook;
