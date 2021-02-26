import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
interface Props {
  instiInputs: Record<string, unknown>;
  instiSelection: boolean;
  handleInstiSelection: any;
  errormessage: string;
  inputInstiInfo: any;
}
function instiSelection({
  instiInputs,
  instiSelection,
  handleInstiSelection,
  errormessage,
  inputInstiInfo,
}: Props) {
  const history = useHistory();

  return instiSelection ? (
    <div>
      <h1>교습소 유형을 선택해주세요</h1>
      <div>
        <button onClick={() => inputInstiInfo('유치원')}>유치원</button>
        <button onClick={() => inputInstiInfo('어린이집')}>어린이집</button>
        <button onClick={() => inputInstiInfo('학원')}>학원</button>
      </div>
      <div>{errormessage}</div>
      <button
        onClick={() => {
          handleInstiSelection(instiInputs.info);
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
