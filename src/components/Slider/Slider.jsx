import { galleryPhoto } from 'assets/Pictures';
import Picture from 'components/Picture/Picture';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import {
  CloseBtn,
  LeftSvg,
  RightSvg,
  SliderDiv,
  SliderH3,
  SliderStyled,
} from './Slider.styled';

export default function SimpleSlider({ HandlerClick, id }) {
  var settings = {
    infinite: false,
    nextArrow: <RightSvg />,
    prevArrow: <LeftSvg />,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: id,
    dots: true,
    appendDots: dots => (
      <div>
        {dots}
        <CloseBtn onClick={HandlerClick} />
      </div>
    ),
  };
  return (
    <SliderStyled {...settings}>
      {galleryPhoto.map(({ id, webp, jpg, webp2x, jpg2x, alt }) => (
        <SliderDiv key={id}>
          <SliderH3>
            <Picture
              webp={webp}
              jpg={jpg}
              webp2x={webp2x}
              jpg2x={jpg2x}
              alt={alt}
            />
          </SliderH3>
        </SliderDiv>
      ))}
    </SliderStyled>
  );
}
