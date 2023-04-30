import Header from 'components/Header/Header';
import {
  HomeBtn,
  HomeBtn2,
  HomeDescription,
  HomeDescriptionWrap,
  HomeImgDescription,
  HomeImgHolder,
  HomePhotoWrap,
  HomeSection,
  HomeTextL,
  HomeTextM,
  HomeTextM2,
  HomeTitle,
} from './Home.styled';
import { ReactComponent as Arrow } from 'images/svg/arrow.svg';

export default function Home() {
  return (
    <>
      <HomeSection id="home">
        <HomeImgHolder>
          <Header />
          <HomeTitle>The Sky Is The Limit</HomeTitle>
          <HomeImgDescription>
            We provide world class financial assistance
          </HomeImgDescription>
          <HomeBtn type="button">
            <Arrow />
            Read More
          </HomeBtn>
        </HomeImgHolder>
        <HomeDescriptionWrap>
          <HomePhotoWrap></HomePhotoWrap>
          <HomeDescription>
            <HomeTextM>What you are looking for</HomeTextM>
            <HomeTextL>We provide bespoke solutions</HomeTextL>
            <HomeTextM2>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate, ipsum dignissimos quae laudantium asperiores nam
              aliquid impedit harum illum dolore explicabo ab dolores itaque
              rerum temporibus doloribus iste maiores deleniti?
            </HomeTextM2>
            <HomeBtn2 type="button">Read More</HomeBtn2>
          </HomeDescription>
        </HomeDescriptionWrap>
      </HomeSection>
    </>
  );
}
