import axios from 'axios';
import { check } from 'prettier';
import React, { useState, useEffect } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { requestLogin, requestKakaoLogin } from '../common/axios';
import 'dotenv/config';

axios.defaults.withCredentials = true;

//!카카오톡 REST api key 리액트는 환경변수(.env)에서 'REACT_APP_'을 붙여줘야 함
const kakaoKey = process.env.REACT_APP_KAKAO_RESTAPI_KEY;
//!카카오 로그인&회원가입 관련 url
const redirectUri = 'http://localhost:3000/login'; //! 후에 datda 주소로 변경
const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakaoKey}&redirect_uri=${redirectUri}&response_type=code`;

interface propType {
  hadleSetMainData: (data: any) => void;
}
function Login({ hadleSetMainData }: propType) {
  const history = useHistory();
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [errormessage, setErrormessage] = useState<string>('');
  //! 카카오 관련 상태
  const [isKakao, setIsKakao] = useState<boolean>(false);

  const onChange = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputs({ ...inputs, [key]: value });
  };

  const handleLogin = async (email: string, password: string) => {
    if (email.length === 0 || password.length === 0) {
      setErrormessage('이메일이나 비밀번호를 입력해주세요.');
    } else {
      // axios 로그인 요청
      const mainData = await requestLogin(email, password);
      hadleSetMainData(mainData);
      setErrormessage('');
      history.push('/main');
    }
  };

  //! 버튼을 누르면 카카오 정보제공 동의화면으로 넘어감
  const handleKakao = () => {
    window.location.assign(kakaoUrl);
  };

  //! 이것은 카카오 로그인 할때 필요한 사이드이펙트
  useEffect(() => {
    if (!isKakao) {
      const url = new URL(window.location.href);
      const authorizationCode = url.searchParams.get('code');
      if (authorizationCode) {
        requestKakaoLogin(authorizationCode).then((mainData) => {
          hadleSetMainData(mainData);
          setErrormessage('');
          history.push('/main');
        });
      }
      setIsKakao(true);
    }
  }, [isKakao]);

  return (
    <LoginGlobal>
      <Link to="/">
        <img id="logo" src="../images/logo.png" />
        <Header>Datda</Header>
      </Link>

      <InputBox>
        <input
          className="inputBox"
          type="text"
          placeholder="이메일"
          onChange={(e) => onChange('email', e)}
        ></input>
      </InputBox>
      <InputBox>
        <input
          className="inputBox"
          type="password"
          placeholder="비밀번호"
          onChange={(e) => onChange('password', e)}
        ></input>
      </InputBox>
      <div>{errormessage}</div>
      <Button onClick={() => handleLogin(inputs.email, inputs.password)}>
        로그인
      </Button>
      <button onClick={handleKakao}>카카오 로그인</button>
      <Link to="/signup">
        <div>
          <Button>회원가입</Button>
        </div>
      </Link>
    </LoginGlobal>
  );
}

export default Login;

const LoginGlobal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;

  #logo {
    resize: both;
    width: 40px;
  }
`;

const InputBox = styled.div`
  .inputBox {
    border: solid 0px;
    border-bottom: solid 1px;
  }
  margin: 5px 0px 5px 0px;
`;

const Header = styled.span`
  margin-bottom: 0px;
  font-size: 3rem;
`;
const Button = styled.button`
  ${({ theme }) => theme.common.defaultButton}
  margin : 2vh 0 3vh 0;
`;
