import React, { useState, useEffect } from 'react';

import {
  withRouter,
  Router,
  match,
  Route,
  Link,
  Switch,
  RouteComponentProps,
} from 'react-router-dom';
import styled, { css } from 'styled-components';
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
  CreateClass,
  Management,
  Bus,
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

interface Props {
  setModalMessage: any;
  setModalVisible: any;
  handleLogout: any;
  userInfo: {
    permission: string;
    isLogin: boolean;
    mainData: any;
  };
}

export default function Main(
  // { handleLogout, userInfo }: propsType,
  { setModalMessage, setModalVisible, userInfo, handleLogout }: Props,
) {
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
        <Nav handleLogout={handleLogout}></Nav>
      </Header>
      <Aside id="aside">
        <TopSubNav id="top-submenu"></TopSubNav>
        <FristPart id="avatar">
          <Avatar userInfo={userInfo}></Avatar>
        </FristPart>
        <SecondPart id="state" permission={userInfo.permission}>
          {userInfo.permission === 'parent' ? (
            <>
              <State
                type="현재상태"
                isCheck={isCheck}
                isOk={isOk}
                isSleep={isSleep}
                isEat={isEat}
                please={please}
              ></State>
            </>
          ) : null}
        </SecondPart>
        <ThirdPart id="submenu">
          <SubMenu permission={userInfo.permission}></SubMenu>
        </ThirdPart>
        <FourthPart>
          <SecondSubMenu></SecondSubMenu>
        </FourthPart>
      </Aside>
      <Section id="content">
        <ContentCard>
          <Switch>
            <Route exact path={`/main`}>
              <Contents userInfo={userInfo}></Contents>
            </Route>
            <Route
              path={`/main/notice`}
              render={() => <Notice userInfo={userInfo} />}
            />
            <Route
              path={`/main/medicine`}
              render={() => <Medicine userInfo={userInfo} />}
            />
            <Route
              path={`/main/meal`}
              render={() => <Meal userInfo={userInfo} />}
            />
            <Route
              path={`/main/indi_notice`}
              render={() => <IndiNotice userInfo={userInfo} />}
            />
            <Route
              path={`/main/album`}
              render={() => <Album userInfo={userInfo} />}
            />
            <Route path={`/main/profile`} component={Profile} />
            <Route path={`/main/timetable`} component={TimetableList} />
            <Route path={`/main/education`} component={EducationList} />
            <Route exact path={`/main}/report`} component={Report} />
            <Route path={'/main/timetable'} component={TimetableList} />
            <Route path={'/main/education'} component={EducationList} />
            <Route path={'/main/report'} component={Report} />
            <Route
              exact
              path={'/main/director'}
              render={() => (
                <CreateClass
                  setModalMessage={setModalMessage}
                  setModalVisible={setModalVisible}
                />
              )}
            />
            <Route path={'/main/management'} component={Management} />
            <Route path={'/main/bus'} component={Bus} />
          </Switch>
        </ContentCard>
      </Section>
      {/* <BottomSection>
        <Carousel></Carousel>
      </BottomSection> */}
      <Footer>
        <FooterContents></FooterContents>
      </Footer>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 900px;
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
      z-index: 10;
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
  width: 25%;
  height: 800px;
  float: left;
  padding: 1%;
`;
const Section = styled.div`
  width: 75%;
  height: 900px;
  float: left;
  padding: 1%;
`;
const BottomSection = styled.div`
  width: 100%;
  height: 300px;
  clear: both;
  padding-top: 10%;
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
  height: 25%;
  padding: 2%;
`;
const SecondPart = styled.div<any>`
  width: 100%;
  height: 14%;
  display: flex;
  padding: 2%;
  ${(props) =>
    props.permission !== 'parent' &&
    css`
      display: none;
    `}
`;
const ThirdPart = styled.div`
  width: 100%;
  padding: 2%;
  padding: 10px 0px 10px 0px;
`;
const FourthPart = styled.div`
  width: 100%;
  height: 31%;
  padding: 2%;
`;
const ContentCard = styled.div`
  margin-bottom: 3%;
  background: white;
  height: 100%;
  ${({ theme }) => theme.common.contentCardDiv}
`;
