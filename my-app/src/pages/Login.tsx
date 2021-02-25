import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Login() {
  const [inputs, setInputs] = useState({ email: null, password: null });
  const [errormessage, setErrormessage] = useState<string>('');

  const onChange = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputs({ ...inputs, [key]: value });
  };

  return (
    <LoginGlobal>
      <Header>Login</Header>
      <SmallHead>Datda EDU</SmallHead>
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
      <button>로그인</button>
      <Link to="/signup">
        <div>
          <button>회원가입</button>
        </div>
      </Link>
      <div>{errormessage}</div>
    </LoginGlobal>
  );
}

export default Login;

const LoginGlobal = styled.div`
  text-align: center;
  margin: 40vh 0 0 0;
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
