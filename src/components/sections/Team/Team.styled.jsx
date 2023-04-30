import { SectionStyled } from 'components/common/commonComponents';
import styled from 'styled-components';
import { GalleryTextL, GalleryTextM } from '..';

export const TeamSection = styled(SectionStyled)`
  padding: 72px 20px 50px 20px;
  @media screen and (min-width: 600px) {
    padding-left: 80px;
    padding-right: 80px;
  }
  @media screen and (min-width: 768px) {
    padding: 50px 32px 40px 32px;
  }
  @media screen and (min-width: 1360px) {
    padding: 80px 28px 88px 28px;
  }
`;
export const TeamTextM = styled(GalleryTextM)`
  font-size: 20px;
`;

export const TeamTextL = styled(GalleryTextL)``;

export const TeamTextM2 = styled(TeamTextM)`
  font-size: 18px;
  margin-bottom: 63px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const TeamList = styled.ul`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 18px;
  }

  @media screen and (min-width: 1360px) {
    grid-gap: 20px;
  }
`;

export const TeamItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 30px;
    @media screen and (min-width: 360px) {
      margin-bottom: 0;
    }
  }
`;

export const TeamImgHolder = styled.div`
  position: relative;
  overflow: hidden;
  :hover {
    transform: scale(1.05);
    transition: transform 300ms ${p => p.theme.trFunction};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 1px 1px rgba(0, 0, 0, 0.12),
      0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
    border-radius: 3px;
  }
  &:hover div {
    opacity: 1;
  }
`;

export const TeamOverlay = styled.div`
  opacity: 0;
`;

export const MemberName = styled.p`
  text-align: center;
  margin-top: 16px;
  margin-bottom: 8px;
  font-size: 20px;
  line-height: 1.35;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const MemberPosition = styled(MemberName)`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
