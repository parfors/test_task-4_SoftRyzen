import { SectionStyled } from 'components/common/commonComponents';
import styled from 'styled-components';
import { TeamTextL } from '..';
import ContactsImg from 'images/home/contact.jpg';
import ContactsImg2x from 'images/home/contact@2x.jpg';

export const ContactSection = styled(SectionStyled)`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1.13fr;
  }
`;

export const ContactImgHolder = styled.div`
  height: 220px;
  background-image: url(${ContactsImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${ContactsImg2x});
  }
  @media screen and (min-width: 500px) {
    height: 400px;
  }
  @media screen and (min-width: 768px) {
    height: 100%;
  }
`;

export const ContactFormHolder = styled.div`
  padding: 50px 20px 25px 20px;
  background-color: #f4f4f4;
  @media screen and (min-width: 768px) {
    padding: 32px;
  }
  @media screen and (min-width: 1360px) {
    padding: 56px 28px 77px 20px;
  }
`;

export const ContactTextL = styled(TeamTextL)`
  text-align: start;
  margin-bottom: 69px;
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;
