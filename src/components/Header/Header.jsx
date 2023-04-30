import Logo from 'components/common/Logo/Logo';
import {
  HeaderStyled,
  NavLinkStyled,
  NavList,
  NavListItem,
} from './Header.styled';
import navList from 'assets/linkList';
import { useEffect, useState } from 'react';

export default function Header() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isFixed, setIsFixed] = useState(false);
  const [height, setHeight] = useState('');

  const getScrollHeight = () => {
    const height = window.innerWidth < 768;
    return height ? 120 : 112;
  };

  const clickHandler = id => {
    setSelectedItem(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHeight(getScrollHeight());
      if (window.pageYOffset > height) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [height]);

  return (
    <HeaderStyled className={isFixed ? 'fixed' : null}>
      <Logo />
      <NavList>
        {navList.map(({ value, href, id }) => (
          <NavListItem
            className={selectedItem === id ? 'active' : null}
            key={id}
          >
            <NavLinkStyled
              onClick={() => clickHandler(id)}
              to={`${href}`}
              smooth={true}
              duration={500}
              offset={-height}
            >
              {value}
            </NavLinkStyled>
          </NavListItem>
        ))}
      </NavList>
    </HeaderStyled>
  );
}
