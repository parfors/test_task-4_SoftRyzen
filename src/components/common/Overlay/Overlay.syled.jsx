import styled from 'styled-components';

export const SocialList = styled.ul`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SocialItem = styled.li`
  &:not(:last-child) {
    margin-right: 25px;
  }
  svg {
    width: 35px;
    height: 35px;
    fill: ${p => p.theme.colors.white};
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const SocialLink = styled.a``;
