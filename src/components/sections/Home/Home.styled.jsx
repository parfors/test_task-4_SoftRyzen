import { SectionStyled } from 'components/common/commonComponents';
import HeroImg from 'images/home/showcase.jpg';
import HeroImg2x from 'images/home/showcase@2x.jpg';
import HomeImg2 from 'images/home/people.jpg';
import HomeImg2x from 'images/home/people@2x.jpg';
import styled from 'styled-components';

export const HomeSection = styled(SectionStyled)`
  position: relative;
`;

export const HomeImgHolder = styled.div`
  padding: 160px 0 104px 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${HeroImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${HeroImg2x});
  }
  @media screen and (min-width: 768px) {
    padding: 378px 0;
  }
  @media screen and (min-width: 1360px) {
    padding: 272px 0;
  }
`;

export const HomeDescriptionWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1.09fr;
    @media screen and (min-width: 1360px) {
      grid-template-columns: 1fr 1.03fr;
    }
  }
`;

export const HomePhotoWrap = styled.div`
  width: 100%;
  height: 220px;
  background-image: url(${HomeImg2});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${HomeImg2x});
  }
  @media screen and (min-width: 768px) {
    height: 100%;
  }
`;

export const HomeDescription = styled.div`
  padding: 79px 20px;
  background-color: ${p => p.theme.colors.accent};
  @media screen and (min-width: 768px) {
    padding: 62px 32px;
  }
  @media screen and (min-width: 1360px) {
    padding: 80px 28px 86px 20px;
  }
`;

export const HomeTitle = styled.h1`
  margin: 0 auto;
  max-width: 240px;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 40px;
  line-height: 1.35;
  text-align: center;
  color: ${p => p.theme.colors.white};
  @media screen and (min-width: 768px) {
    font-size: 55px;
    line-height: 1.36;
    max-width: 550px;
  }
`;

export const HomeImgDescription = styled.p`
  margin-bottom: 24px;
  margin-right: auto;
  margin-left: auto;
  font-size: 26px;
  line-height: 1.23;
  text-align: center;
  color: ${p => p.theme.colors.white};
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.2;
    max-width: 550px;
  }
  @media screen and (min-width: 1360px) {
    max-width: 800px;
  }
`;

export const HomeBtn = styled.button`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 175px;
  height: 57px;
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  border-radius: 5px;
  font-size: 18px;
  line-height: 1.38;
  svg {
    width: 8px;
    height: 11px;
    fill: #ffffff;
    margin-right: 9px;
  }
  &:hover {
    background-color: #2ebf4f;
  }
`;

export const HomeTextM = styled.p`
  font-size: 16px;
  line-height: 1.37;
  color: ${p => p.theme.colors.white};
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.38;
  }
`;

export const HomeTextL = styled.p`
  font-size: 32px;
  line-height: 1.37;
  color: ${p => p.theme.colors.white};
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.2;
  }
`;

export const HomeTextM2 = styled(HomeTextM)`
  margin-bottom: 24px;
`;

export const HomeBtn2 = styled(HomeBtn)`
  width: 146px;
  height: 54px;
  border: solid 1px white;
  margin: 0;
  :hover {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.accent};
  }
  @media screen and (min-width: 768px) {
    width: 156px;
    height: 57px;
  }
`;
