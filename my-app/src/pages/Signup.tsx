import React, { useEffect, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { SignupCommon, SignupInstitution } from '../pages/Index';
import {
  Signup,
  SignupDetail,
  Institution,
  Selection,
  SignupSearchInsti,
  SignupSearchClass,
  InstiSelection,
  SocialSelection,
} from '../components/Index';
import {
  isPasswordCheck,
  isIdCheck,
  isPasswordCorrect,
  isNameCHeck,
  isPhoneCheck,
} from '../common/utils/validation';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import { userInfo } from 'os';

function Signin() {
  //회원가입 필요한 정보
  const [inputs, setInputs] = useState({
    email: null,
    password: null,
    passwordCheck: null,
    name: null,
    mobile: null,
    permission: '',
    role: null,
  });
  const [instiInputs, setInstiInputs] = useState({
    institutionName: null,
    master: null,
    info: '',
  });

  //에러메세지
  const [errormessage, setErrormessage] = useState<string>('');
  //첫 페이지(회원 유형 선택)
  const [selection, setSelection] = useState<boolean>(true);

  //아이디 비밀번호 설정 페이지
  const [signup, setSignup] = useState<boolean>(false);
  //이름 이메일 전화번호
  const [signupDetail, setSignupDetail] = useState<boolean>(false);
  //기관 눌렀을 시에 추가 입력 페이지
  const [institution, setInstitution] = useState<boolean>(false);

  const [instiSelection, setInstiSelection] = useState<boolean>(false);
  // 선생님과 학부모가 버튼을 눌렀을 시
  const [searchInsti, setSearchInsti] = useState<boolean>(false);

  const [searchClass, setSearchClass] = useState<boolean>(false);

  const history = useHistory();
  //학부모, 선생님을 선택할 시
  const handleSelection = () => {
    if (inputs.permission.length !== 0) {
      setSelection(false);
      setSignup(true);
    }
  };

  const handleKakao = () => {
    if (inputs.permission.length !== 0) {
      setSelection(false);
    }
  };

  // useEffect(() => {
  //   if (selection === false) {
  //     setSocialSelection(true);
  //   }
  // }, [selection]);

  //기관 가입을 선택할 시

  const handleSignup = (
    email: string,
    password: string,
    passwordCheck: string,
  ) => {
    if (email === null) {
      setErrormessage('정보를 입력하서야 합니다');
    } else if (!isIdCheck(email)) {
      setErrormessage('올바르지 못한 이메일입니다');
    } else if (!isPasswordCheck(password)) {
      setErrormessage(
        '최소 8자 이상의, 특수문자와 숫자, 문자를 포함한 비밀번호를 입력하셔야 합니다',
      );
    } else if (!isPasswordCorrect(password, passwordCheck)) {
      setErrormessage('비밀번호가 일치하지 않습니다.');
    } else {
      setSignup(false);
      history.push('/signup/common');
      setErrormessage('');
    }
  };

  const handleSignupDetail = (name: string, role: string, phone: string) => {
    if (name === null || role === null || phone === null) {
      setErrormessage('모든 항목은 필수입니다');
    } else if (!isNameCHeck(name)) {
      setErrormessage('이름을 확인해주세요/');
    } else if (!isPhoneCheck(phone)) {
      setErrormessage('올바른 전화번호를 입력해주세요.');
    } else {
      setErrormessage('');
      inputs.permission === 'institution'
        ? (setInstitution(true), history.push('/signup/institution'))
        : history.push('/login');
    }
  };
  const handleInstitution = (institutionName: string, master: string) => {
    institutionName === null || master === null
      ? setErrormessage('모든 항목은 필수입니다')
      : (setErrormessage(''), setInstitution(false), setInstiSelection(true));
  };

  const handleInstiSelection = (info: string) => {
    info.length === 0
      ? setErrormessage('교습소 중 하나를 선택해주세요')
      : (history.push('/'), setErrormessage(''));
  };

  //인풋데이터 값 바꾸기
  const onChange = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputs({ ...inputs, [key]: value });
  };

  const onChangeInsti = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = e.target;
    setInstiInputs({ ...instiInputs, [key]: value });
  };
  //교육소 분류 state에 넣기
  const inputInstiInfo = (value: string) => {
    setInstiInputs({ ...instiInputs, info: value });
  };

  return (
    <SignupGlobal>
      <Link to="/">
        <h1>Datda</h1>
      </Link>

      <Selection
        selection={selection}
        handleSelection={handleSelection}
        onChange={onChange}
        handleKakao={handleKakao}
      />
      <Signup
        inputs={inputs}
        signup={signup}
        handleSignup={handleSignup}
        errormessage={errormessage}
        onChange={onChange}
      />
      <Switch>
        <Route exact path="/signup/common">
          <SignupCommon
            inputs={inputs}
            handleSignupDetail={handleSignupDetail}
            errormessage={errormessage}
            onChange={onChange}
          />
        </Route>
        <Route exact path="/signup/institution">
          <SignupInstitution
            inputs={inputs}
            institution={institution}
            handleInstitution={handleInstitution}
            onChangeInsti={onChangeInsti}
            errormessage={errormessage}
            instiInputs={instiInputs}
            instiSelection={instiSelection}
            handleInstiSelection={handleInstiSelection}
            inputInstiInfo={inputInstiInfo}
          />
        </Route>
      </Switch>
      {/* <SignupDetail
      inputs={inputs}
        signupDetail={signupDetail}
        handleSignupDetail={handleSignupDetail}
        errormessage={errormessage}
        onChange={onChange}/> */}

      {/* <Institution
        institution={institution}
        handleInstitution={handleInstitution}
        onChangeInsti={onChangeInsti}
        errormessage={errormessage}
        instiInputs={instiInputs}
      /> */}
      {/* <SignupSearchInsti
        searchInsti={searchInsti}
        handleSearchInsti={handleSearchInsti}
      />
      <SignupSearchClass
        searchClass={searchClass}
        handleSearchClass={handleSearchClass}
      /> */}
      {/* <InstiSelection
        errormessage={errormessage}
        instiInputs={instiInputs}
        instiSelection={instiSelection}
        handleInstiSelection={handleInstiSelection}
        inputInstiInfo={inputInstiInfo}
      /> */}
    </SignupGlobal>
  );
}

export default Signin;

const SignupGlobal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`;
