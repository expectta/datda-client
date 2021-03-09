import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
interface Props {
  inputs: Record<string, unknown>;
  instiInputs: Record<string, unknown>;
  instiSelection: boolean;
  handleInstiSelection: any;
  errormessage: string;
  inputInstiInfo: any;
  postInsti: any;
}
function instiSelection({
  inputs,
  instiInputs,
  instiSelection,
  handleInstiSelection,
  errormessage,
  inputInstiInfo,
  postInsti,
}: Props) {
  const [clickButton, setClickButton] = useState(0);
  const handleChangeButton = (index: number) => {
    if (index === 0) {
      inputInstiInfo('유치원');
      setClickButton(index);
    } else if (index === 1) {
      inputInstiInfo('어린이집');
      setClickButton(index);
    } else if (index === 2) {
      inputInstiInfo('학원');
      setClickButton(index);
    }
  };
  return instiSelection ? (
    <InstSelect>
      <div>
        <div className="h1">기관 유형을 선택해주세요</div>
        <div className="instInfoFrame">
          <Button
            className={clickButton !== 0 ? 'instInfo' : ''}
            onClick={() => handleChangeButton(0)}
          >
            유치원
          </Button>
          <Button
            id="forMargin"
            className={clickButton !== 1 ? 'instInfo' : ''}
            onClick={() => handleChangeButton(1)}
          >
            어린이집
          </Button>
          <Button
            id="forMargin"
            className={clickButton !== 2 ? 'instInfo' : ''}
            onClick={() => handleChangeButton(2)}
          >
            학원
          </Button>
        </div>
        <div className="error">{errormessage}</div>
        <div className="done">
          <Button
            onClick={() => {
              postInsti(
                inputs.name,
                inputs.role,
                inputs.phone,
                inputs.permission,
                inputs.email,
                inputs.password,
                instiInputs.info,
                instiInputs.master,
                instiInputs.institutionName,
              );
            }}
          >
            기관 가입 완료
          </Button>
        </div>
      </div>
    </InstSelect>
  ) : (
    <div></div>
  );
}

export default instiSelection;

const InstSelect = styled.div`
  width: 600px;
  .h1 {
    margin: 30px 0;
    text-align: center;
  }
  .instInfo {
    background: white;
    border: 1px solid #6e6eff;
    color: #6e6eff;
  }
  .instInfoFrame {
    display: flex;
    justify-content: center;
  }
  #forMargin {
    margin-left: 30px;
  }
  .error {
    color: red;
    text-align: center;
  }
  .done {
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }
`;

const Button = styled.button`
  ${({ theme }) => theme.common.defaultButton}
  margin : 2vh 0 3vh 0;
`;
