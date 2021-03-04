import React from 'react';
import styled from 'styled-components';
interface Props {
  isTeacher: boolean;
  teachers: Array<Record<string, unknown>>;
}
function TeacherManage({ isTeacher, teachers }: Props) {
  return isTeacher ? (
    <div id="teacher">
      <div>승인대기중</div>
      <div id="teacherWaiting">
        <div id="teacherWaitingTitle">
          <span>교사</span>
          <span>시간</span>
        </div>
        <div id="teacherWaitionList">
          {teachers.map((teacher: any) => (
            <div>
              <span>{teacher.userName}</span>
              <span>{teacher.created_at}</span>
              <span className="teacherButtonArea1">
                <button>수락</button>
                <button>보류</button>
                <button>거절</button>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>교사관리</div>
      <div id="teacherManage">
        <div id="teacherManageTitle">
          <span>선택</span>
          <span>교사</span>
          <span>반</span>
        </div>
        <div id="teacherManageList">
          {teachers.map((teacher: any) => (
            <div className="teacherList">
              <input type="checkbox" value={teacher.userName}></input>
              <span className="indiTeacher">{teacher.userName}</span>
              <span>햇님반</span>
            </div>
          ))}
          <div id="teacherButtonArea2">
            <button>반 변경</button>
            <button>퇴직</button>
          </div>
        </div>
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
