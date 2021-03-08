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
      <div>
        <button onClick={() => handleSelection()}>일반가입</button>
        <button onClick={() => handleKakao()}>카카오톡 가입</button>
      </div>
    </SelectionWrap>
  ) : (
    <div></div>
  );
}

export default Selection;

const SelectionWrap = styled.div``;
