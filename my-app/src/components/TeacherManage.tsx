import React, { useState } from 'react';
import styled from 'styled-components';
interface Props {
  classInfo: any;
  isTeacher: boolean;
  teachers: Array<Record<string, unknown>>;
  setModalMessage: any;
  setModalVisible: any;
}
function TeacherManage({
  isTeacher,
  teachers,
  classInfo,
  setModalMessage,
  setModalVisible,
}: Props) {
  const [waitingList, setWaitingList] = useState([
    { userName: '이인수', created_at: '2010-10-10', Id: '1' },
  ]);

  const [checkedClass, setCheckedClass] = useState({ className: '' });

  const [checkedTeacher, setCheckedTeacher] = useState({ userName: '' });

  const onModal = (value: any) => {
    setModalVisible(true);
    setModalMessage(value);
  };
  //radio class 버튼;
  const onCheckedClass = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCheckedClass({ ...checkedClass, className: value });
  };

  const onCheckedTeacher = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCheckedTeacher({ ...checkedTeacher, userName: value });
  };

  //곧 승인 요청을 내려줄 함수;
  const checkValue = (value: any) => {
    console.log(value);
  };

  return isTeacher ? (
    <div id="teacher">
      <div>승인대기중</div>
      <div id="teacherWaiting">
        <div id="teacherWaitingTitle">
          <span>교사</span>
          <span>시간</span>
        </div>
        <div id="teacherWaitionList">
          {waitingList.map((teacher: any) => (
            <div>
              <span>{teacher.userName}</span>
              <span>{teacher.created_at}</span>
              <span className="teacherButtonArea1">
                <button
                  onClick={() => {
                    checkValue(teacher);
                  }}
                >
                  수락
                </button>
                {/* <button>보류</button>
                <button>거절</button> */}
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
              <input
                type="radio"
                onChange={(e) => {
                  onCheckedTeacher(e);
                }}
                name="teacherList"
                value={teacher.userName}
              ></input>
              <span className="indiTeacher">{teacher.userName}</span>
              <span>햇님반</span>
            </div>
          ))}
          <div id="teacherButtonArea2">
            <button
              onClick={() => {
                onModal(
                  <div id="classInfoModal">
                    {classInfo.map((classs: any) => (
                      <div>
                        <input
                          type="radio"
                          name="classInfo"
                          value={classs.className}
                          onChange={(e) => {
                            onCheckedClass(e);
                          }}
                        ></input>
                        <span>{classs.className}</span>
                      </div>
                    ))}
                    <button>보내기</button>
                  </div>,
                );
              }}
            >
              반 변경
            </button>
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
