import React from 'react';
import {
  BlogBnt,
  BlogContent,
  BlogImgHolder,
  BlogSection,
  BlogTextL,
  BlogTextM,
  BlogTextM2,
  BlogWrap,
} from '..';

export default function Blog() {
  return (
    <BlogSection id="blog">
      <BlogWrap>
        <BlogContent>
          <BlogTextM>April 16 2020</BlogTextM>
          <BlogTextL>Blog Post One</BlogTextL>
          <BlogTextM2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </BlogTextM2>
          <BlogBnt>Read Our Blog</BlogBnt>
        </BlogContent>
        <BlogImgHolder />
      </BlogWrap>
    </BlogSection>
  );
}
