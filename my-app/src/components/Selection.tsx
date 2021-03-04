import React from 'react';
import styled from 'styled-components';

interface Props {
  selection: boolean;
  handleSelection: any;
  onChange: any;
}
function Selection({ selection, handleSelection, onChange }: Props) {
  return selection ? (
    <SelectionWrap>
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
        <button onClick={() => handleSelection()}>일반가입</button>
        <button>카카오톡 가입</button>
      </div>
    </SelectionWrap>
  ) : (
    <div></div>
  );
}

export default Selection;

const SelectionWrap = styled.div``;
