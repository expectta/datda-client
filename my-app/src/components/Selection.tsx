import React from 'react';

interface Props {
  selection: boolean;
  handleSelection: any;
  handleIsInsti: any;
}
function Selection({ selection, handleSelection, handleIsInsti }: Props) {
  return selection ? (
    <div className="selection">
      <button onClick={() => handleSelection()}>학부모 회원가입</button>
      <button onClick={() => handleSelection()}>선생님 회원가입</button>
      <button onClick={() => handleIsInsti()}>기관 등록</button>
    </div>
  ) : (
    <div></div>
  );
}

export default Selection;
