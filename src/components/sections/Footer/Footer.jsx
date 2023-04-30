import { SocialLink } from 'components/common/Overlay/Overlay.syled';
import { ReactComponent as FbSvg } from 'images/svg/fb.svg';
import { ReactComponent as LInSvg } from 'images/svg/lin.svg';
import { ReactComponent as TwSvg } from 'images/svg/twit.svg';
import { ReactComponent as YouTubeSvg } from 'images/svg/youtub.svg';
import { FooterItem, FooterList, FooterStyled, FooterText } from '..';

const links = {
  fb: 'https://www.facebook.com/',
  tw: 'https://twitter.com/',
  youT: 'https://www.youtube.com/',
  lIn: 'https://www.linkedin.com/',
};

export default function Footer() {
  return (
    <FooterStyled>
      <FooterList>
        <FooterItem>
          <SocialLink href={links.fb} target="_blank">
            <FbSvg />
          </SocialLink>
        </FooterItem>
        <FooterItem>
          <SocialLink href={links.tw} target="_blank">
            <TwSvg />
          </SocialLink>
        </FooterItem>
        <FooterItem>
          <SocialLink href={links.youT} target="_blank">
            <YouTubeSvg />
          </SocialLink>
        </FooterItem>
        <FooterItem>
          <SocialLink href={links.lIn} target="_blank">
            <LInSvg />
          </SocialLink>
        </FooterItem>
      </FooterList>
      <FooterText>Copyright © 2021 - FinanceLedger</FooterText>
    </FooterStyled>
  );
}
