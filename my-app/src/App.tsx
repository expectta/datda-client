import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import {
  Main,
  Login,
  Intro,
  Signup,
  UserInfo,
  SignupCommon,
} from './pages/Index';
import { Modal } from './components/Index';
import styled, {
  GlobalStyleComponent,
  ThemeProvider,
  createGlobalStyle,
} from 'styled-components';
import theme from './assets/theme';

function App() {
  // modal 상태
  const [modalMessage, setModalMessage] = useState('^___^  << 한솔님');
  const [modalVisible, setModalVisible] = useState(false);
  //로그인 한 유저정보
  //! 나중에 false로 바꿔야함
  const [userInfo, setUserInfo] = useState({
    userId: '',
    permission: '',
    institution: '',
    isLogin: true,
  });
  // modal창 제거
  const closeModal = () => {
    setModalVisible(false);
  };
  const ok = (per: string) => {
    setUserInfo({
      ...userInfo,
      permission: per,
      isLogin: true,
    });
  };
  const handleLogout = () => {
    setUserInfo({
      userId: '',
      permission: '',
      institution: '',
      isLogin: false,
    });
    console.log('로그아웃 됨');
  };

  useEffect(() => {
    if (userInfo.permission === 'director') {
      setUserInfo({
        ...userInfo,
        institution: '밀알어린이집',
        userId: '1',
      });
    }
    if (userInfo.permission === 'teacher') {
      setUserInfo({
        ...userInfo,
        institution: '밀알어린이집',
        userId: '2',
      });
    }
    if (userInfo.permission === 'parents') {
      setUserInfo({
        ...userInfo,
        userId: '3',
      });
    }
    console.log(userInfo.permission, '= 권한', userInfo.institution, '=기관');
  }, [userInfo.permission]);
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup" component={Signup} />
          {/* 로그인이 됐을때만 화면 접속 가능 */}
          {userInfo.isLogin ? (
            <>
              <Route path="/main">
                <Main
                  userInfo={userInfo}
                  handleLogout={handleLogout}
                  setModalMessage={setModalMessage}
                  setModalVisible={setModalVisible}
                ></Main>
              </Route>
              <Route
                path="/userinfo"
                component={UserInfo}
                userPermission={userInfo.permission}
              />
            </>
          ) : null}
          <Route path="/userinfo" component={UserInfo} />
        </Switch>
      </ThemeProvider>
      <Modal visible={modalVisible} closable maskClosable onClose={closeModal}>
        <h3>{modalMessage}</h3>
      </Modal>
    </Router>
  );
}

export default App;
// 전체 element 기본속성 결정
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    #intro_global{
      ::-webkit-scrollbar{
        width: 7px;
        border-radius : 6px;
        background-color : green;
      }
      
      ::-webkit-scrollbar-thumb{
        border-radius : 4px;
          width : 100px;
          background-color : orange;
          -webkit-box-shadow : 0 0 1px rgba(255,255,255,0.5);
        }
    }
    
	}
	a{
		text-decoration:none;
		color:#7f7b7b;
	}
`;
