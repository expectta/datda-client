import React from 'react';
interface Props {
  inputs: Record<string, unknown>;
  handleSignup: any;
  signup: boolean;
  errormessage: string;
  onChange: any;
  handleIsEmail: any;
}

function Signup({
  signup,
  handleSignup,
  errormessage,
  onChange,
  inputs,
  handleIsEmail,
}: Props) {
  return signup ? (
    <div className="signup">
      <div>
        <span>이메일 설정</span>
        <input type="text" onChange={(e) => onChange('email', e)}></input>
        <button
          onClick={() => {
            handleIsEmail(inputs.email);
          }}
        >
          중복 확인
        </button>
      </div>

      <div>
        <span>비밀번호 설정</span>
        <input
          type="password"
          onChange={(e) => onChange('password', e)}
        ></input>
      </div>
      <div>
        <span>비밀번호 확인</span>
        <input
          type="password"
          onChange={(e) => onChange('passwordCheck', e)}
        ></input>
      </div>
      <div>{errormessage}</div>
      <button
        onClick={() => {
          handleSignup(inputs.email, inputs.password, inputs.passwordCheck);
        }}
      >
        다음
      </button>
    </div>
  ) : (
    <div></div>
  );
}

export default Signup;

/*회원가입 첫번째 창 css 수정중
border: solid 0px;
    width: 400px;
    float: right;
    text-align: left;
}
*/
