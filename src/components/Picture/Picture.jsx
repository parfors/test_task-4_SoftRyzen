import React from 'react';

export default function Picture({ webp, jpg, webp2x, jpg2x, alt }) {
  return (
    <>
      <picture>
        <source type="image/webp" srcSet={`${webp} 1x, ${webp2x} 2x`} />
        <source type="image/jpeg" srcSet={`${jpg} 1x, ${jpg2x} 2x`} />
        <img src={jpg} alt={alt} />
      </picture>
    </>
  );
}
