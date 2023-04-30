import styled from 'styled-components';
import { Link } from 'react-scroll';

export const HeaderStyled = styled.header`
  padding: 22px 24px;
  position: absolute;
  top: 0;
  max-width: 1863px;

  width: calc(100% - 48px);
  left: 50%;
  transform: translateX(-50%);
  transition: position 2s ease-in-out;

  @media screen and (min-width: 768px) {
    width: calc(100% - 64px);
    padding: 32px 32px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background-color 0.8s ease-in-out;
  }

  @media screen and (min-width: 1360px) {
    padding: 32px 28px;
    width: calc(100% - 56px);
  }
  &.fixed {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 25;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavListItem = styled.li`
  position: relative;
  &:not(:last-child) {
    margin-right: 12px;
    @media screen and (min-width: 768px) {
      margin-right: 20px;
    }
  }
  &.active::before {
    content: '';
    display: block;
    position: absolute;
    top: 25px;
    left: -10%;
    width: 120%;
    height: 2px;
    background-color: ${p => p.theme.colors.accent};
  }
  &:hover::before {
    content: '';
    display: block;
    position: absolute;
    top: 25px;
    left: -10%;
    width: 120%;
    height: 2px;
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const NavLinkStyled = styled(Link)`
  cursor: pointer;
  font-size: 12px;
  line-height: 1.37;
  color: ${p => p.theme.colors.white};
  @media screen and (min-width: 320px) {
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
