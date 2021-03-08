import React from 'react';
import styled from 'styled-components';

interface Props {
  selection: boolean;
  handleSelection: any;
  handleKakao: any;
}
function Selection({ selection, handleSelection, handleKakao }: Props) {
  return selection ? (
    <SelectionWrap>
      <div className="button">
        <img
          className="normal"
          src="../images/normalSignup.svg"
          onClick={() => handleSelection()}
        ></img>
        <img
          className="kakao"
          src="../images/kakaoSignup.svg"
          onClick={() => handleKakao()}
        ></img>
      </div>
    </SelectionWrap>
  ) : (
    <div></div>
  );
}

export default Selection;

const SelectionWrap = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .normal {
    border: 1px solid rgb(0, 0, 0);
    cursor: pointer;
  }
  .kakao {
    margin-top: 10px;
    border: 1px solid rgb(0, 0, 0);
    cursor: pointer;
    margin-left: 50px;
  }
  .button {
    text-align: center;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    .kakao {
      margin-left: 0;
    }
  }
`;
