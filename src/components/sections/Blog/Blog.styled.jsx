import { SectionStyled } from 'components/common/commonComponents';
import styled from 'styled-components';
import { HomeBtn2, HomeTextL, HomeTextM } from '..';
import BlogImg from 'images/home/blog.jpg';
import BlogImg2x from 'images/home/blog@2x.jpg';

export const BlogSection = styled(SectionStyled)``;

export const BlogWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1.029fr 1fr;
  }
`;

export const BlogContent = styled.div`
  background-color: ${p => p.theme.colors.blue};
  padding: 48px 20px 58px 20px;
  @media screen and (min-width: 768px) {
    padding: 59px 32px 59px 32px;
  }
  @media screen and (min-width: 1360px) {
    padding: 80px 20px 80px 28px;
  }
`;

export const BlogTextM = styled(HomeTextM)``;

export const BlogTextL = styled(HomeTextL)``;

export const BlogTextM2 = styled(BlogTextM)`
  margin-bottom: 24px;
`;

export const BlogBnt = styled(HomeBtn2)`
  width: 172px;
  height: 54px;
  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.white};
  :hover {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.blue};
  }
`;

export const BlogImgHolder = styled.div`
  height: 0px;
  background-image: url(${BlogImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${BlogImg2x});
  }
  @media screen and (min-width: 768px) {
    height: 100%;
  }
`;
