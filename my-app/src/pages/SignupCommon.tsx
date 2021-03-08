import React, { useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

interface Props {
  handleSignupDetail: any;
  onChange: any;
  errormessage: string;
  inputs: Record<string, unknown>;
}
function SignupCommon({
  inputs,
  handleSignupDetail,
  onChange,
  errormessage,
}: Props) {
  // const handleCheck = () => {
  //   console.log(inputs.email);
  // };
  if (inputs.email === null) {
    return <div>loding</div>;
  }
  return (
    <div className="signupDetail">
      <div id="typePermission">가입유형</div>
      <select
        id="selectPermission"
        onChange={(e) => {
          onChange('permission', e);
        }}
      >
        <option value="">가입유형을 선택해주세요</option>
        <option value="parent">학부모</option>
        <option value="teacher">선생님</option>
        <option value="institution">기관</option>
      </select>
      <div>
        <span>이름</span>
        <input type="text" onChange={(e) => onChange('name', e)}></input>
      </div>
      <div>
        <span>role</span>
        <input type="email" onChange={(e) => onChange('role', e)}></input>
      </div>
      <div>
        <span>전화번호</span>
        <input type="text" onChange={(e) => onChange('mobile', e)}></input>
      </div>
      <button
        onClick={() => {
          handleSignupDetail(
            inputs.name,
            inputs.role,
            inputs.mobile,
            inputs.permission,
            inputs.email,
            inputs.password,
          );
        }}
      >
        {inputs.permission === 'institution' ? '다음' : '완료'}
      </button>
      <div>{errormessage}</div>
    </div>
  );
}

export default SignupCommon;
