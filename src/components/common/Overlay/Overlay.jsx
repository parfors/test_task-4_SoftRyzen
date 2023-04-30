import React from 'react';
import { ReactComponent as FbSvg } from 'images/svg/fb.svg';
import { ReactComponent as TwSvg } from 'images/svg/twit.svg';
import { ReactComponent as YouTubeSvg } from 'images/svg/youtub.svg';
import { ReactComponent as LInSvg } from 'images/svg/lin.svg';
import { SocialItem, SocialLink, SocialList } from './Overlay.syled';

export default function Overlay({ fb, tw, youT, lIn, bg }) {
  return (
    <SocialList style={{ backgroundColor: bg }}>
      <SocialItem>
        <SocialLink href={fb} target="_blank">
          <FbSvg />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href={tw} target="_blank">
          <TwSvg />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href={youT} target="_blank">
          <YouTubeSvg />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href={lIn} target="_blank">
          <LInSvg />
        </SocialLink>
      </SocialItem>
    </SocialList>
  );
}
