import React from 'react';
import {
  MemberName,
  MemberPosition,
  TeamImgHolder,
  TeamItem,
  TeamList,
  TeamOverlay,
  TeamSection,
  TeamTextL,
  TeamTextM,
  TeamTextM2,
} from '..';
import { teamPhoto } from 'assets/Pictures';
import Picture from 'components/Picture/Picture';
import Overlay from 'components/common/Overlay/Overlay';

export default function Team() {
  return (
    <TeamSection id="team">
      <TeamTextM>Who we are</TeamTextM>
      <TeamTextL>Our Professional Team</TeamTextL>
      <TeamTextM2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </TeamTextM2>
      <TeamList>
        {teamPhoto.map(
          ({ id, webp, jpg, webp2x, jpg2x, alt, name, position, links }) => (
            <TeamItem key={id}>
              <TeamImgHolder>
                <Picture
                  webp={webp}
                  jpg={jpg}
                  webp2x={webp2x}
                  jpg2x={jpg2x}
                  alt={alt}
                />
                <TeamOverlay>
                  <Overlay
                    fb={links.fb}
                    tw={links.tw}
                    youT={links.youT}
                    lIn={links.lIn}
                  />
                </TeamOverlay>
              </TeamImgHolder>
              <MemberName>{name}</MemberName>
              <MemberPosition>{position}</MemberPosition>
            </TeamItem>
          )
        )}
      </TeamList>
    </TeamSection>
  );
}
