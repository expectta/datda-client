import styled from 'styled-components';
import React, { useRef, useEffect, useState } from 'react';
export default function Carousel() {
  // carousel 상태
  const slideRef = useRef<HTMLDivElement>(null);
  const TOTAL_SLIDES = 1;
  const [currentSlide, setCurrentSlide] = useState(0);
  // carousel의 다음 슬라이드
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  // carousel의 이전 슬라이드
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    const { current } = slideRef;
    if (current !== null) {
      current.style.transition = 'all 0.3s ease-in-out';
      current.style.transform = `translateX(-${currentSlide}00%)`;
    }
  }, [currentSlide]);
  return (
    <>
      <CarouselContainer>
        <SliderContainer ref={slideRef}>
          <AlbumCard>
            <AlbumImg src="../images/album1.png" alt="앨범사진"></AlbumImg>
          </AlbumCard>
          <AlbumCard>
            <AlbumImg src="../images/album2.png" alt="앨범사진"></AlbumImg>
          </AlbumCard>
          <AlbumCard>
            <AlbumImg src="../images/album1.png" alt="앨범사진"></AlbumImg>
          </AlbumCard>
          <AlbumCard>
            <AlbumImg src="../images/album2.png" alt="앨범사진"></AlbumImg>
          </AlbumCard>
          <AlbumCard></AlbumCard>
          <AlbumCard></AlbumCard>
          <AlbumCard></AlbumCard>
          <AlbumCard></AlbumCard>
          <AlbumCard></AlbumCard>
          <AlbumCard></AlbumCard>
        </SliderContainer>
      </CarouselContainer>
      <SlideButtonWrap>
        <SlideButton onClick={prevSlide}>
          <Arrow>{'<'}</Arrow>
        </SlideButton>
        <SlideButton onClick={nextSlide}>
          <Arrow>{'>'}</Arrow>
        </SlideButton>
      </SlideButtonWrap>
    </>
  );
}
const SlideButtonWrap = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  top: -138px;
  justify-content: space-between;
`;
const SlideButton = styled.span`
  width: 50px;
  height: 50px;
	border-radius: 30px;
	display: flex;
  background: white;
	align-items: center;
	place-content: center;
	cursor:pointer;
  box-shadow: 1px 1px 3px;
}
`;
const Arrow = styled.span`
  font-size: 2.5rem;
  color: #6f6eff;
`;
const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  height: auto;
`;
const SliderContainer = styled.div`
  padding: 1%;
  display: flex;
`;
const AlbumCard = styled.span`
  width: 235px;
  height: 220px;
  display: inline-table;
  height: 200px;
  margin: 0px 8px 0px 8px;
  ${({ theme }) => theme.common.divCardStyle};
`;
const AlbumImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
`;
const ButtonWrap = styled.div`
  text-align: center;
`;

const ButtonImg = styled.button`
  ${({ theme }) => theme.common.buttonStyle}
`;
