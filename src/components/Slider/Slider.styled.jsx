import Slider from 'react-slick';
import { ReactComponent as LeftArrow } from 'images/svg/ep_arrow-left-bold.svg';
import { ReactComponent as RightArrow } from 'images/svg/ep_arrow-right-bold.svg';
import { VscChromeClose } from 'react-icons/vsc';

import styled from 'styled-components';

export const SliderStyled = styled(Slider)`
  max-width: 600px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LeftSvg = styled(LeftArrow)`
  width: 50px;
  height: 100vh;
  fill: #bdb7b7;
  left: 2%;
  z-index: 100;
  opacity: 0;
  :hover {
    fill: white;
    opacity: 1;
    transition: opacity 150ms ease-in-out;
  }
`;
export const RightSvg = styled(RightArrow)`
  width: 50px;
  height: 100vh;
  fill: #bdb7b7;
  z-index: 100;
  right: 2%;
  opacity: 0;
  :hover {
    fill: white;
    opacity: 1;
    transition: opacity 300ms ease-in-out;
  }
`;

export const CloseBtn = styled(VscChromeClose)`
  position: absolute;
  cursor: pointer;
  fill: #bdb7b7;
  width: 40px;
  height: 40px;
  top: 0;
  right: 0;
  z-index: 101;

  :hover {
    fill: white;
    transition: fill 300ms ease-in-out;
  }
`;

export const SliderDiv = styled.div``;

export const SliderH3 = styled.h3``;
