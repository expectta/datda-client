import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
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
  // modal창 제거
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route
            path="/main"
            render={() => (
              <Main
                setModalMessage={setModalMessage}
                setModalVisible={setModalVisible}
              />
            )}
          />
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
