import { galleryPhoto } from 'assets/Pictures';
import Picture from 'components/Picture/Picture';
import Modal from 'components/common/Modal/Modal';
import { useState } from 'react';
import {
  GalleryItem,
  GalleryList,
  GallerySection,
  GalleryTextL,
  GalleryTextM,
  GalleryTextM2,
} from '..';

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [slide, setSlide] = useState(1);

  const HandlerClick = id => {
    setSlide(id);
    setIsVisible(!isVisible);
  };
  return (
    <GallerySection id="cases">
      <GalleryTextM>This is what we do</GalleryTextM>
      <GalleryTextL>Business Cases</GalleryTextL>
      <GalleryTextM2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </GalleryTextM2>
      <GalleryList>
        {galleryPhoto.map(({ id, webp, jpg, webp2x, jpg2x, alt }) => (
          <GalleryItem onClick={() => HandlerClick(id)} key={id}>
            <Picture
              webp={webp}
              jpg={jpg}
              webp2x={webp2x}
              jpg2x={jpg2x}
              alt={alt}
            />
          </GalleryItem>
        ))}
      </GalleryList>
      {isVisible && <Modal HandlerClick={HandlerClick} id={slide} />}
    </GallerySection>
  );
}
