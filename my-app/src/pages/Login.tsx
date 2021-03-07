import axios from 'axios';
import { check } from 'prettier';
import React, { useState } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { requestLogin } from '../common/axios';

interface propType {
  hadleSetMainData: (data: any) => void;
}
function Login({ hadleSetMainData }: propType) {
  const history = useHistory();
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [errormessage, setErrormessage] = useState<string>('');

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
      <Button>카카오로 로그인</Button>
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
