import styled from 'styled-components';
import { HomeTextL, HomeTextM } from '..';
import { SectionStyled } from 'components/common/commonComponents';

export const GallerySection = styled(SectionStyled)`
  padding: 56px 20px 40px 20px;
  @media screen and (min-width: 600px) {
    padding-left: 80px;
    padding-right: 80px;
  }
  @media screen and (min-width: 768px) {
    padding: 48px 32px 40px 32px;
  }
  @media screen and (min-width: 1360px) {
    padding: 80px 28px 80px 28px;
  }
`;

export const GalleryTextM = styled(HomeTextM)`
  margin-bottom: 16px;
  text-align: center;
  color: ${p => p.theme.colors.dark};
`;

export const GalleryTextL = styled(HomeTextL)`
  text-align: center;
  margin-bottom: 24px;
  color: ${p => p.theme.colors.dark};
`;

export const GalleryTextM2 = styled(HomeTextM)`
  text-align: center;
  color: ${p => p.theme.colors.dark};
  margin-bottom: 31px;
`;

export const GalleryList = styled.ul`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 18px;
  }
`;

export const GalleryItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 6px;
    @media screen and (min-width: 768px) {
      margin-bottom: 0;
    }
  }
`;
