import React from 'react';
import { LogoText, LogoText2, LogoWrap } from './Logo.styled';
import { ReactComponent as LogoSvg } from 'images/svg/logo_book.svg';

export default function Logo() {
  return (
    <>
      <LogoWrap href="">
        <LogoSvg />
        <LogoText>Finance</LogoText>
        <LogoText2 style={{ color: '#ffffff' }}>Ledger</LogoText2>
      </LogoWrap>
    </>
  );
}
