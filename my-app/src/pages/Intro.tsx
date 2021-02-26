import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//첫 페이지
function Intro() {
  return (
    <IntroGlobal>
      <div className="section intro">
        <div className="introText">
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

      <div className="section 1">
        <GreenFont>공지사항</GreenFont>
        <span>과 </span>
        <GreenFont>알림장</GreenFont>
        <span>을</span>
        <div>한 곳에서!</div>
      </div>
      <div className="section 2">
        <div>아이의 모든 일상을</div>
        <div>실시간으로 공유하기</div>
      </div>
      <div className="section 3">
        <div>오늘 우리 아이</div>
        <div>급식 확인하기</div>
      </div>
      <div className="section 4">
        <div>선생님 초대하기</div>
      </div>
      <div className="section 5">
        <div>인터넷으로</div>
        <div>투약의뢰서 요쳥하기</div>
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
`;

const LinkArea = styled.div`
  margin-top: 10vh;
`;

const LinkDetail = styled.button`
  margin: 0 5vw 0 5vw;
`;
