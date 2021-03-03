import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  isStudent: boolean;
  students: Array<Record<string, unknown>>;
  setModalMessage: any;
  setModalVisible: any;
}
function StudentManage({
  isStudent,
  students,
  setModalVisible,
  setModalMessage,
}: Props) {
  const [count, setCount] = useState<number>(students.length);

  return isStudent ? (
    <div id="student">
      <div id="studentButton">
        <Button>전체 선택</Button>
        <Button>반 변경</Button>
        <Button>퇴원 처리</Button>
      </div>
      <div id="studentInputArea">
        <input type="text" placeholder="원아를 입력해주세요"></input>
        <Button>검색</Button>
        <span>총 인원 수 :</span>
        <span>{count}</span>
        <span>명</span>
      </div>
      <div className="studentArea">
        {students.map((student: any) => (
          <div>
            <input type="checkbox" value={student.className}></input>
            <span>{student.className}</span>
            <span>{student.userName}</span>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default StudentManage;

const Button = styled.button`
  ${({ theme }) => theme.common.defaultButton}
  margin : 0 2% 0 2%;
`;
