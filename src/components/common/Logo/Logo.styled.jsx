import styled from 'styled-components';

export const LogoWrap = styled.a`
  cursor: pointer;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  width: 200px;
  display: flex;
  margin-bottom: 16px;
  @media screen and (min-width: 320px) {
    width: 250px;
  }
  @media screen and (min-width: 768px) {
    margin: 0;
    width: 300px;
    align-self: flex-start;
  }
  svg {
    margin-right: 8px;
    width: 30px;
    height: 25px;
    fill: ${p => p.theme.colors.accent};
    @media screen and (min-width: 320px) {
      width: 40px;
      height: 35px;
    }
  }
  :hover {
    transform: scale(1.1);
    transition: transform 300ms ${p => p.theme.trFunction};
    svg {
      fill: #5ed14f;
    }
    :hover span {
      color: #5ed14f;
    }
  }
`;

export const LogoText = styled.span`
  margin-right: 8px;
  font-size: 20px;
  line-height: 1.36;
  color: ${p => p.theme.colors.accent};
  @media screen and (min-width: 320px) {
    font-size: 28px;
  }
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`;
export const LogoText2 = styled(LogoText)`
  margin-right: 0;
  color: ${p => p.theme.colors.white};
`;
