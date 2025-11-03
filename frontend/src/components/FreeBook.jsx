import React from "react";
// import list from "../assets/list.json";
import Cards from "./Cards";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState,useEffect } from "react";
import axios from "axios";

function FreeBook() {
  // **************************************FOR USING book INSTEAD OF list.json(connetion with backend)
  const [book,setBook]= useState([]) 
   useEffect(() => {
     const getBook = async () => {
       try {
         const res = await axios.get("http://localhost:4001/book");
        //  console.log(res.data);
         setBook(res.data);
       } catch (error) {
         console.error(error);
       }
     };
     getBook();
   }, []);
// *******************************

  const fiterData = book.filter((data) => data.category === "Free");   // using BOOK instead of LIST.JSON

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
