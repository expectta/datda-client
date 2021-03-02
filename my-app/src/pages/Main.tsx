import React, { useState, useEffect } from 'react';

import {
  withRouter,
  Router,
  Route,
  Switch,
  RouteComponentProps,
} from 'react-router-dom';
import styled from 'styled-components';
import {
  TimetableList,
  Profile,
  Notice,
  Medicine,
  Album,
  Meal,
  IndiNotice,
  EducationList,
  Report,
} from './Index';
import {
  Nav,
  Avatar,
  Contents,
  State,
  SubMenu,
  FooterContents,
  Carousel,
  SecondSubMenu,
} from '../components/Index';
import firestore from '../common/utils/firebase';

function Main({ match }: RouteComponentProps<any>) {
  // 출석
  const [isCheck, setIsCheck] = useState(false);
  // 투약의뢰서
  const [please, setPlease] = useState(false);
  // 투약보고서
  const [isOk, setIsOk] = useState(false);
  // 낮잠
  const [isSleep, setIsSleep] = useState(false);
  // 식사
  const [isEat, setIsEat] = useState(false);
  // 기관 아이디 관련 변수
  const institutionId = '0'; //! 여기서는 0이지만 Mysql의 institutionId
  // 아이 아이디 관련 변수
  const childrenId = '0'; //! 여기서는 0이지만 Mysql의 childrenId
  // fireStore의 institution 찾는 쿼리
  const institutionCol = firestore.collection('institution').doc(institutionId);
  // fireStore의 institution&children 찾는 쿼리
  const db = institutionCol.collection('children').doc(childrenId);
  // 회원이 로그인 할 경우 실시간 상태를 업데이트
  useEffect(() => {
    handleLogin();
  }, []);
  // 로그인 했을 시 firebase 데이터 관리
  const handleLogin = () => {
    db.get().then((doc) => {
      // 유저의 상태테이터가 firebase에 있다면
      if (doc.data()) {
        alert('datda에 오신것을 환영합니다!');
        handleRealTime();
      } else {
        db.set({
          Check: false,
          Eat: false,
          Ok: false,
          Sleep: false,
          please: false,
        });
      }
    });
  };
  //friebase 실시간 감지
  const handleRealTime = () => {
    db.onSnapshot((doc) => {
      setIsCheck(doc.data()?.Check);
      setIsOk(doc.data()?.Ok);
      setIsSleep(doc.data()?.Sleep);
      setIsEat(doc.data()?.Eat);
      setPlease(doc.data()?.Please);
    });
  };
  const handleIsCheck = (e: any) => {
    // 학부모가 '투약의뢰' 버튼을 눌렀을 시
    if (e.target.id === 'please') {
      db.update({
        Please: true,
      });
      // 학부모가 '확인' 버튼을 눌렀을 시
    } else if (e.target.id === 'donePlease') {
      db.update({
        Please: false,
      });
      // 선생님이 '등원' 버튼을 눌렀을 시
    } else if (e.target.id === 'checkUp') {
      // firebase에 있는 상태를 바꾼다.
      db.update({
        Check: true,
      });
      // 선생님이 '하원' 버튼을 눌렀을 시
    } else if (e.target.id === 'checkDown') {
      // firebase에 있는 상태를 바꾼다.
      db.update({
        Check: false,
      });
      // 선생님이 '투약보고서'를 전송하면
    } else if (e.target.id === 'ok') {
      db.update({
        Ok: true,
      });
      // 선생님이 '확인' 버튼을 눌렀을 시
    } else if (e.target.id === 'doneOk') {
      db.update({
        Ok: false,
      });
      // 선생님이 '취침' 버튼을 눌렀을 시
    } else if (e.target.id === 'sleep') {
      db.update({
        Sleep: true,
      });
      // 선생님이 '기상' 버튼을 눌렀을 시
    } else if (e.target.id === 'wakeUp') {
      db.update({
        Sleep: false,
      });
      // 선생님이 '식사 시작' 버튼을 눌렀을 시
    } else if (e.target.id === 'eat') {
      db.update({
        Eat: true,
      });
      // 선생님이 '식사 끝' 버튼을 눌렀을 시
    } else if (e.target.id === 'ate') {
      db.update({
        Eat: false,
      });
    }
  };

  return (
    <Wrap>
      <Header id="header">
        <Nav></Nav>
      </Header>
      <Aside id="aside">
        <TopSubNav id="top-submenu"></TopSubNav>
        <FristPart id="avatar">
          <Avatar></Avatar>
        </FristPart>
        <SecondPart id="state">
          <State
            isCheck={isCheck}
            isOk={isOk}
            isSleep={isSleep}
            isEat={isEat}
            please={please}
          ></State>
        </SecondPart>
        <ThirdPart id="submenu">
          <SubMenu></SubMenu>
        </ThirdPart>
        <FourthPart>
          <SecondSubMenu></SecondSubMenu>
        </FourthPart>
      </Aside>
      <Section id="content">
        <ContentCard>
          <Switch>
            <Route exact path={`${match.path}`} component={Contents} />
            <Route path={`${match.path}/notice`} component={Notice} />
            <Route path={`${match.path}/medicine`} component={Medicine} />
            <Route path={`${match.path}/meal`} component={Meal} />
            <Route path={`${match.path}/indi_notice`} component={IndiNotice} />
            <Route path={`${match.path}/album`} component={Album} />
            <Route path={`${match.path}/profile`} component={Profile} />
            <Route path={`${match.path}/timetable`} component={TimetableList} />
            <Route path={`${match.path}/education`} component={EducationList} />
            <Route paht={`${match.path}/report`} component={Report} />
          </Switch>
        </ContentCard>
      </Section>
      <BottomSection>
        <Carousel></Carousel>
      </BottomSection>
      <Footer>
        <FooterContents></FooterContents>
      </Footer>
    </Wrap>
  );
}

export default Main;

const Wrap = styled.div`
  width: 800px;
  margin: 0 auto;
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    #header {
      position: fixed;
      bottom: 0px;
      background: #6f6eff;
      width: 100%;
      margin-bottom: 0px;
      div {
        display: none;
      }
    }
    #top-submenu {
      width: 100%;
    }
    #aside {
      width: 100%;
      height: 40%;
    }
    #content {
      width: 100%;
    }
    #avatar {
      width: 90%;
      height: 220px;
      margin: 0 auto;
    }
    #state {
      width: 90%;
      height: 20%;
      margin: 0 auto;
      div {
        display: flex;
        height: fit-content;
        gap: 1%;
      }
    }
    #submenu {
      display: none;
    }
  } ;
`;
const Header = styled.div`
  width: 100%;
  height: 40px;
  padding: 1%;

  margin-bottom: 7%;
`;
const Aside = styled.div`
  width: 30%;
  height: 700px;
  float: left;
  padding: 2%;
`;
const Section = styled.div`
  width: 70%;
  height: 700px;
  float: left;
  padding: 2%;
`;
const BottomSection = styled.div`
  width: 100%;
  height: 300px;
  clear: both;
  padding-top: 6%;

  padding: 2%;
  margin-bottom: 50px;
`;
const Footer = styled.div`
  width: 100%;
  height: 80px;
  clear: both;
  padding: 5%;
  margin-bottom: 50px;
`;
const TopSubNav = styled.div`
  width: 100%;
  widht: 50px;
`;
const FristPart = styled.div`
  width: 100%;
  height: 30%;
  padding: 2%;
`;
const SecondPart = styled.div`
  width: 100%;
  height: 13%;
  display: flex;
  padding: 2%;
`;
const ThirdPart = styled.div`
  width: 100%;
  height: 13%;
  padding: 2%;
`;
const FourthPart = styled.div`
  width: 100%;
  height: 44%;
  padding: 2%;
`;
const ContentCard = styled.div`
  margin-bottom: 3%;
  background: white;
  height: 100%;
  ${({ theme }) => theme.common.contentCardDiv}
`;
const TimetableSection = styled.div`
  width: 100%;
  height: 25%;
`;
const MainMenuSection = styled.div`
  width: 100%;
  height: 25%;
`;
const MiniNoticeSection = styled.div`
  width: 100%;
  height: 25%;
`;
const MiniIndiNoticeSection = styled.div`
  width: 100%;
  height: 25%;
`;

// const Button = styled.button`
//   ${({ theme }) => theme.common.defaultButton}
// `;
// const Input = styled.input`
//   ${({ theme }) => theme.common.defaultInput}
// `;
// const Avatar = styled.img`
//   ${({ theme }) => theme.common.profileImageDiv}
// `;
// const Card = styled.div`
//   ${({ theme }) => theme.common.albumCardDiv}
// `;
