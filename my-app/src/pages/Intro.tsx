import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//첫 페이지
function Intro() {
  return (
    <IntroGlobal id="intro_global">
      <div className="section intro">
        <div
          className="introText"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <div>우리 아이 유치원 생활</div>
          <div>더욱 스마트하게 관리하기</div>
          <LinkArea>
            <Link to="/signup">
              <LinkDetail>회원가입</LinkDetail>
            </Link>
            <Link to="/login">
              <LinkDetail>로그인</LinkDetail>
            </Link>
          </LinkArea>
        </div>
      </div>

      <Section1 className="section 1">
        <div className="section1Box">
          <div>
            <GreenFont>정확한 공지사항</GreenFont>
            <span>과 </span>
          </div>
          <GreenFont>알림장</GreenFont>
          <span> 전달받기</span>
          <div>잘못된 공지를 받고 혼란스러웠던</div>
          <div>경험이 있나요? 닿다는 정확한</div>
          <div>공지 내용을 가장 빠르게 전달합니다.</div>
        </div>
      </Section1>

      <div className="section 2">
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-mirror="true"
        >
          이 곳은 시험입니다.
        </div>
        <div className="section2box">
          <div>
            <span>아이들의 모든 일상</span>
            <span>을</span>
          </div>
          <div>
            <span>실시간</span>
            <span>으로 공유하기</span>
          </div>
          <div>아이들이 보고싶은 순간순간에 닿다는</div>
          <div>아이들의 생생한 일상사진을 실시간으로</div>
          <div>공유합니다</div>
        </div>
      </div>

      <div className="section 3">
        <div className="section3Box">
          <div>아이들이 먹는 음식은</div>
          <div>너무나도 중요하니까</div>
          <div>아이들이 건강한 몸을 위해 닿다는</div>
          <div>오늘의 식단들을 공유합니다. 쑥쑥 성장할 우리 아이들!</div>
        </div>
      </div>
      <div className="section 4">
        <div className="section4Box">
          <div>간단한 선생님 관리</div>
          <div>간편하게 선생님과 원아를 반배정 하기</div>
          <div>자유롭게 반배정하기 너무 편하지 않나요?</div>
        </div>
      </div>
      <div className="section 5">
        <div className="section5Box">
          <div>투약 의뢰서로</div>
          <div>아이건강 챙기기</div>
          <div>닿다는 투약의로서를 온라인으로 접수하여</div>
          <div>아이들의 건강한 생활을 위한 정확한 투약을</div>
          <div>진행하도록 돕습니다</div>
        </div>
      </div>
      <div>
        <div className="section 6">
          <div className="section6Box">
            <div>빠르게 차량정보</div>
            <div>확인하기</div>
            <div>우리 아이 무슨 버스 타야 좋을까</div>
            <div>우리 아이는 언제쯤 집에 도착하는지 궁금할 때</div>
            <div>닿다를 통해 빠르게 확인하세요</div>
          </div>
        </div>
        <div className="linkAgain">
          <LinkArea>
            <Link to="/login">
              <button>로그인</button>
            </Link>
            <Link to="/signup">
              <button>회원가입</button>
            </Link>
          </LinkArea>
        </div>
        <button
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
        >
          맨 위로
        </button>
      </div>
    </IntroGlobal>
  );
}

export default Intro;

const GreenFont = styled.span`
  color: green;
`;

const IntroGlobal = styled.div`
  .section {
    width : 100vw;
    height : 100vh;
    border : solid 2px;
  }
  .introText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
  }
  
  text-align : center;
  width : 70%
  margin: 0 auto;
}
`;

const Section1 = styled.div`
  background: lightgray;
`;

const Section1Box = styled.div`
  background: green;
`;

const LinkArea = styled.div`
  margin-top: 10vh;
  margin-bottom: 10vh;
`;

const LinkDetail = styled.button`
  margin: 0 5vw 0 5vw;
`;
