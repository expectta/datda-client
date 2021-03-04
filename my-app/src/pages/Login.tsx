import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

axios.defaults.withCredentials = true;

function Login() {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [errormessage, setErrormessage] = useState<string>('');

  const onChange = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputs({ ...inputs, [key]: value });
  };

  const handleLogin = (email: string, password: string) => {
    if (email.length === 0 || password.length === 0) {
      setErrormessage('이메일이나 비밀번호를 입력해주세요.');
    } else {
      setErrormessage('');
    }
  };

  return (
    <LoginGlobal>
      <Link to="/">
        <Header>Datda</Header>
      </Link>

      <InputBox>
        <span className="inputText">이메일</span>
        <input
          className="inputBox"
          type="text"
          onChange={(e) => onChange('email', e)}
        ></input>
      </InputBox>
      <InputBox>
        <span className="inputText">비밀번호</span>
        <input
          className="inputBox"
          type="password"
          onChange={(e) => onChange('password', e)}
        ></input>
      </InputBox>
      <div>{errormessage}</div>
      <button onClick={() => handleLogin(inputs.email, inputs.password)}>
        로그인
      </button>
      <Link to="/signup">
        <div>
          <button>회원가입</button>
        </div>
      </Link>
    </LoginGlobal>
  );
}

export default Login;

const LoginGlobal = styled.div`
  text-align: center;
  margin: 0 auto;
`;

const InputBox = styled.div`
  .inputBox {
    border: solid 0px;
    border-bottom: solid 1px;
  }
  margin: 5px 0px 5px 0px;
`;

const Header = styled.h1`
  margin-bottom: 0px;
`;

const SmallHead = styled.h3`
  margin-top: 10px;
`;
