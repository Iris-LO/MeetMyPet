import React, { useEffect } from 'react';
import Slider from "react-slick";
import CardLastDog from '../CardsLastDogs/CardLastDog';
// Import Components

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// Import CSS
import './sliderPart.scss';


const SliderPart = ({lastDogs, image}) => {

var settings = {
      dots: true,
      infinite: true,
      speed: 4000,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: false,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
  <div className="wrapper">


      <div>
        <h2 className="slider-title"> Derniers membres inscrits</h2>
        <Slider {...settings}>

          {lastDogs.map((dog) => (
          <div className="wrapper-card">
            <CardLastDog key={dog.id} {...dog} />
          </div>
          ))}
        </Slider>
      </div>
    </div>
    );

}
export default SliderPart;
