import React from 'react';
import { GalleryItem, GalleryList, GallerySection, GalleryTextL, GalleryTextM, GalleryTextM2 } from '..';
import { galleryPhoto } from 'assets/Pictures';
import Picture from 'components/Picture/Picture';


export default function Gallery() {
  return (
    <GallerySection id="cases">
      <GalleryTextM>This is what we do</GalleryTextM>
      <GalleryTextL>Business Cases</GalleryTextL>
      <GalleryTextM2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </GalleryTextM2>
      <GalleryList>
        {galleryPhoto.map(({id, webp, jpg, webp2x, jpg2x, alt})=> (
          <GalleryItem key={id}>
            <Picture              
              webp={webp}
              jpg={jpg}
              webp2x={webp2x}
              jpg2x={jpg2x}
              alt={alt}/>
          </GalleryItem>
        ))}
      </GalleryList>
    </GallerySection>
  );
}
