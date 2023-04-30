import styled from 'styled-components';
import { BlogTextM } from '..';

export const FooterStyled = styled.footer`
  max-width: 1920px;
  margin: 0 auto;
  padding: 20px 0;
  background-color: ${p => p.theme.colors.footer};
`;

export const FooterText = styled(BlogTextM)`
  text-align: center;
  font-size: 16px;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const FooterList = styled.ul`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterItem = styled.li`
  &:not(:last-child) {
    margin-right: 25px;
  }
  svg {
    width: 25px;
    height: 25px;
    fill: ${p => p.theme.colors.white};
    @media screen and (min-width: 320px) {
      width: 35px;
      height: 35px;
    }
    &:hover {
      fill: ${p => p.theme.colors.accent};
    }
  }
`;
