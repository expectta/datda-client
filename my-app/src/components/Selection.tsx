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
          src="../images/normalSignup.png"
          onClick={() => handleSelection()}
        ></img>
        <img
          className="kakao"
          src="../images/kakaoSignup.png"
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
    cursor: pointer;
    height: 30px;
    width: auto;
  }
  .kakao {
    margin-top: 10px;
    cursor: pointer;
    margin-left: 50px;
    height: 30px;
    width: auto;
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
