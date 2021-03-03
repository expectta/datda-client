import React from 'react';
import styled from 'styled-components';
interface Props {
  isTeacher: boolean;
  teachers: Array<Record<string, unknown>>;
}
function TeacherManage({ isTeacher, teachers }: Props) {
  return isTeacher ? (
    <div id="teacher">
      {teachers.map((teacher: any) => (
        <div className="teacherArea">
          <input type="checkbox" value={teacher.userName}></input>
          <span className="indiTeacher">{teacher.userName}</span>
        </div>
      ))}
      <div id="teacherButton">
        <Button>교사 지정</Button>
        <Button>교사 퇴직</Button>
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default TeacherManage;

const Button = styled.button`
  ${({ theme }) => theme.common.defaultButton}
  margin : 0 2% 0 2%;
`;
