import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  return instiSelection ? (
    <div>
      <h1>기관 유형을 선택해주세요</h1>
      <div>
        <button onClick={() => inputInstiInfo('유치원')}>유치원</button>
        <button onClick={() => inputInstiInfo('어린이집')}>어린이집</button>
        <button onClick={() => inputInstiInfo('학원')}>학원</button>
      </div>
      <div>{errormessage}</div>
      <button
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
      </button>
    </div>
  ) : (
    <div></div>
  );
}

export default instiSelection;
