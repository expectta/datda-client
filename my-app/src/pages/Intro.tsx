import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//첫 페이지
function Intro() {
  return (
    <IntroGlobal id="intro_global">
      <SectionIntro className="section intro">
        <div id="introText" data-aos="fade-down" data-aos-duration="2000">
          <div>우리 아이 유치원 생활</div>
          <div>더욱 스마트하게 관리하기</div>
        </div>
        <LinkArea>
          <Link to="/signup">
            <LinkDetail>회원가입</LinkDetail>
          </Link>
          <Link to="/login">
            <LinkDetail>로그인</LinkDetail>
          </Link>
        </LinkArea>
      </SectionIntro>

      <Section1 className="section 1">
        <Section1Box>
          <div className="bigText">
            <div>
              <span className="bold">정확한 공지사항</span>
              <span>과 </span>
            </div>
            <span className="bold">알림장</span>
            <span> 전달받기</span>
          </div>
          <div className="smallText">
            <div>잘못된 공지를 받고 혼란스러웠던</div>
            <div>경험이 있나요? 닿다는 정확한</div>
            <div>공지 내용을 가장 빠르게 전달합니다.</div>
          </div>
        </Section1Box>
        <div id="section1Image" data-aos="fade-up" data-aos-duration="1500">
          이곳은 그림 구역입니다
        </div>
      </Section1>

      <Section2 className="section 2">
        <div id="section2Flex">
          <div id="section2Left">
            <div id="section2Image1">여기는 그림2입니다.</div>
            <Section2Box>
              <div className="bigText">
                <div>
                  <span className="bold">아이들의 모든 일상</span>
                  <span>을</span>
                </div>
                <div>
                  <span className="bold">실시간</span>
                  <span>으로 공유하기</span>
                </div>
              </div>
              <div className="smallText">
                <div>아이들이 보고싶은 순간순간에 닿다는</div>
                <div>아이들의 생생한 일상사진을 실시간으로</div>
                <div>공유합니다</div>
              </div>
            </Section2Box>
          </div>
          <div
            id="section2Image2"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-mirror="true"
          >
            이 곳은 시험입니다.
          </div>
        </div>
      </Section2>

      <Section3 className="section 3">
        <div className="section3Box">
          <div className="bigText bold">
            <div>아이들이 먹는 음식은</div>
            <div>너무나도 중요하니까</div>
          </div>
          <div className="smallText">
            <div>아이들이 건강한 몸을 위해 닿다는</div>
            <div>오늘의 식단들을 공유합니다. 쑥쑥 성장할 우리 아이들!</div>
          </div>
        </div>
        <div id="section3Image" data-aos="fade-right" data-aos-duration="1500">
          이곳은 그림3입니다
        </div>
      </Section3>
      <Section4 className="section 4">
        <div id="section4Flex">
          <div id="section4Box">
            <div className="bigText section4 bold">
              <div>간단하게 선생님과 원아</div>
              <div>관리하기</div>
            </div>
            <div className="smallText">
              <div>간편하게 선생님과 원아를 반배정 하기</div>
              <div>자유롭게 반배정하기 너무 편하지 않나요?</div>
            </div>
          </div>
          <div id="section3Right">
            <div
              className="section4Image1"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              이곳은 그림4입니다.
            </div>
            <div
              className="section4Image2"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              이곳은 그림4입니다.
            </div>
          </div>
        </div>
      </Section4>
      <Section5 className="section 5">
        <div id="section5Box">
          <div className="bigText bold">
            <div>투약 의뢰서로</div>
            <div>아이건강 챙기기</div>
          </div>
          <div className="smallText">
            <div>닿다는 투약의로서를 온라인으로 접수하여</div>
            <div>아이들의 건강한 생활을 위한 정확한 투약을</div>
            <div>진행하도록 돕습니다</div>
          </div>
        </div>
        <div id="section5Image" data-aos="fade-up" data-aos-duration="1000">
          이곳은 그림5입니다.
        </div>
      </Section5>
      <Section6 className="section 6">
        <div id="section6Left">
          <div id="section6Box">
            <div className="bigText bold">
              <div>빠르게 차량정보</div>
              <div>확인하기</div>
            </div>
            <div className="smallText">
              <div>우리 아이 무슨 버스 타야 좋을까</div>
              <div>우리 아이는 언제쯤 집에 도착하는지 궁금할 때</div>
              <div>닿다를 통해 빠르게 확인하세요</div>
            </div>
          </div>
        </div>
        <div id="section6Image" data-aos="fade-left" data-aos-duration="2000">
          이곳은 그림 6입니다.
        </div>
      </Section6>
      <LinkAgain className="linkAgain">
        <LinkArea>
          <Link to="/login">
            <LinkButton>로그인</LinkButton>
          </Link>
          <Link to="/signup">
            <LinkButton>회원가입</LinkButton>
          </Link>
        </LinkArea>
      </LinkAgain>
      <button
        id="goToTop"
        onClick={() => {
          window.scrollTo({ top: 0 });
        }}
      >
        맨 위로
      </button>
    </IntroGlobal>
  );
}

export default Intro;

const IntroGlobal = styled.div`
  .section {
    width : 100vw;
    height : 100vh;
  }
  
  .bold {
    font-weight: bold;
  }
  .bigText{
    font-size : ${({ theme }) => theme.fontSizes.titleSize};
    
  }
  .smallText{
    font-size : ${({ theme }) => theme.fontSizes.small};
  }
  #goToTop{
    position: fixed;
    left: 93vw;
    top: 97vh;
  }
  
  width : 70%
  margin: 0 auto;
}
`;

const SectionIntro = styled.div`
  background: gray;
  text-align: center;
  display:flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  #introText{
    font-size : 2.5rem;
    color : white
  }
    
  }
`;

const Section1 = styled.div`
  background: lightgray;
  #section1Image {
    padding-right: 10vw;
    text-align: right;
    margin-top: 10vh;
  }
`;

const Section1Box = styled.div`
  background-color: rgba(11, 156, 49, 0.47);
  text-align: left;
  color: white;
  height: 60%;
  padding: 10%;
`;

const Section2 = styled.div`
  background: rgb(220, 255, 187);
  #section2Image {
    text-align: right;
  }
  #section2Flex {
    display: flex;
    height: 100vh;
    padding-left: 10%;
  }

  #section2Image1 {
    height: 50%;
    padding-top: 20vh;
    padding-left: 10vw;
  }
  #section2Image2 {
    margin-top: 70vh;
    margin-left: 30vw;
  }
`;

const Section2Box = styled.div`
  color: rgb(63, 100, 29);
`;

const Section3 = styled.div`
  background: rgb(251, 246, 246);
  padding-right: 5%;
  .section3Box {
    margin-top: 17%;
    color: rgb(123, 118, 109);
    padding-left: 5%;
  }
  #section3Image {
    text-align: right;
  }
`;

const Section4 = styled.div`
  background: rgb(254, 255, 128);
  padding: 5%;
  #section4Flex {
    display: flex;
    height: 100vh;
  }
  #section4Box {
    color: rgb(123, 118, 109);
  }
`;

const Section5 = styled.div`
  background: rgb(229, 242, 250);
  padding: 7%;
  #section5Box {
    background: rgb(229, 229, 229);
    border: solid white 3px;
    border-radius: 10px;
    width: 60%;
    height: 60%;
    padding-top: 2%;
    padding-left: 5%;
  }
  #section5Image {
    text-align: right;
  }
`;

const Section6 = styled.div`
  background: rgb(229, 229, 229);
  display: flex;
  padding: 7%;

  #section6Image {
    padding-left: 20%;
    text-align: right;
    margin-left: 30%;
    margin-top: 10%;
  }
`;

const LinkArea = styled.div`
  margin-top: 10vh;
  margin-bottom: 10vh;
`;
const LinkAgain = styled.div`
  text-align: center;
`;

const LinkDetail = styled.button`
  ${({ theme }) => theme.common.defaultButton}
  color : black;
  background-color: white;
  margin: 0vh 2vw 0vh 2vw;
`;

const LinkButton = styled.button`
  ${({ theme }) => theme.common.defaultButton}
  margin: 0vh 2vw 0vh 2vw;
`;
