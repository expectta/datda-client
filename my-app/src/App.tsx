import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main, Login, Intro, Signup, UserInfo } from './pages/Index';
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
          <Route exact path="/">
            <Intro />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/userinfo">
            <UserInfo />
          </Route>
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
	}
	a{
		text-decoration:none;
	}
`;
