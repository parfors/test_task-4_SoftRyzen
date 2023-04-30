import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  {ReactComponent as RightArrow} from 'images/svg/ep_arrow-right-bold.svg'
import  {ReactComponent as LeftArrow} from 'images/svg/ep_arrow-left-bold.svg'
import { galleryPhoto } from "assets/Pictures";
import { SliderDiv, SliderH3 } from "./Slider.styled";
import Picture from "components/Picture/Picture";

export default function SimpleSlider() {
    var settings = {
      dots: false,
      infinite: false,
      nextArrow: <RightArrow/>,
      prevArrow: <LeftArrow/>,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {galleryPhoto.map(({id, webp, jpg, webp2x, jpg2x, alt})=>(<SliderDiv>
            <SliderH3><Picture              
              webp={webp}
              jpg={jpg}
              webp2x={webp2x}
              jpg2x={jpg2x}
              alt={alt}/></SliderH3>
        </SliderDiv>))}
      </Slider>
    );
  }