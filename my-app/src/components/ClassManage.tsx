import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  isClass: boolean;
  classInfo: Array<Record<string, unknown>>;
  setModalMessage: any;
  setModalVisible: any;
}
function ClassManage({
  isClass,
  classInfo,
  setModalMessage,
  setModalVisible,
}: Props) {
  const onModalTeacher = () => {
    setModalVisible(true);
    setModalMessage();
  };
  return isClass ? (
    <div>
      {classInfo.map((classs: any) => (
        <div className="classArea">
          <input type="radio" />
          <span className="classList">{classs.className}</span>
        </div>
      ))}
      <div id="classButtonArea">
        <button>수정</button>
        <button>추가</button>
        <button>삭제</button>
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default ClassManage;

const Button = styled.button`
  ${({ theme }) => theme.common.defaultButton}
  margin : 0 2% 0 2%;
`;
