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
  const [count, setCount] = useState<number>(classInfo.length);

  const onModalTeacher = () => {
    setModalVisible(true);
    setModalMessage(
      <div>
        <h3 className="test">선생님 지정</h3>
      </div>,
    );
  };
  return isClass ? (
    <div id="class">
      <div className="classInputArea">
        <input type="text"></input>
        <button>검색</button>
        <div id="count">
          <span>총 반수 : </span>
          <span>{count}</span>
          <span> 명</span>
        </div>
      </div>
      {classInfo.map((classs: any) => (
        <div className="classArea">
          <span>{classs.className}</span>
          <span>{classs.userName}</span>
          <Button
            onClick={() => {
              onModalTeacher();
            }}
          >
            선생님 지정
          </Button>
          <Button>반 보기</Button>
          <Button>반 삭제</Button>
        </div>
      ))}
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
