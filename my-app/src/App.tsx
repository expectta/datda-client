import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
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
import { requestMainData } from '../src/common/axios';

function App() {
  const history = useHistory();
  // modal 상태
  const [modalMessage, setModalMessage] = useState('^___^  << 한솔님');
  const [modalVisible, setModalVisible] = useState(false);
  //로그인 한 유저정보
  //! 나중에 false로 바꿔야함
  const [userInfo, setUserInfo] = useState({
    isLogin: false,
    permission: '',
    mainData: {},
  });
  // modal창 제거
  const closeModal = () => {
    setModalVisible(false);
  };
  const hadleSetMainData = async (data: any) => {
    const loginInfo = JSON.parse(localStorage.getItem('loginInfo')!);
    console.log('최종 데이터 상태로 저장');
    await setUserInfo({
      ...userInfo,
      isLogin: true,
      permission: loginInfo.permission,
      mainData: data,
    });
  };
  useEffect(() => {
    console.log(userInfo, '로그인 유저 상태');
  }, [userInfo.isLogin]);
  useEffect(() => {
    if (localStorage.getItem('loginInfo') && userInfo.isLogin === false) {
      const loginData = JSON.parse(localStorage.getItem('loginInfo')!);
      setUserInfo({
        ...userInfo,
        isLogin: loginData.isLogin,
        permission: loginData.permission,
        mainData: requestMainData(loginData.permission)!,
      });
    }
  }, []);
  //회원 로그아웃 시
  const handleLogout = (): void => {
    localStorage.clear();
  };
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route path="/login">
            <Login hadleSetMainData={hadleSetMainData}></Login>
          </Route>
          <Route path="/signup" component={Signup} />
          {/* 로그인이 됐을때만 화면 접속 가능 */}
          {userInfo.isLogin ? (
            <>
              <Route
                path={`/main`}
                render={() => (
                  <Main
                    userInfo={userInfo}
                    handleLogout={handleLogout}
                    setModalMessage={setModalMessage}
                    setModalVisible={setModalVisible}
                  />
                )}
              />
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
