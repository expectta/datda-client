import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { changeTimeStamp } from '../common/utils/changeTimeStamp';

interface Props {
  classInfo: any;
  isTeacher: boolean;
  teachers: any;
  setModalMessage: any;
  setModalVisible: any;
  approveButton: (teacherId: number) => void;
  changeClassButton: (teacherId: any, classId: any) => void;
}
function TeacherManage({
  isTeacher,
  teachers,
  classInfo,
  setModalMessage,
  setModalVisible,
  approveButton,
  changeClassButton,
}: Props) {
  const [checkedClass, setCheckedClass] = useState({ classId: '' });

  const [checkedTeacher, setCheckedTeacher] = useState({ teacherId: '' });

  const onModal = (value: any) => {
    setModalVisible(true);
    setModalMessage(value);
  };
  //radio class 버튼;
  const onCheckedClass = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCheckedClass({ ...checkedClass, classId: value });
  };

  const onCheckedTeacher = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCheckedTeacher({ ...checkedTeacher, teacherId: value });
  };

  //곧 승인 요청을 내려줄 함수;

  return isTeacher ? (
    <TeacherManageWrap id="teacher">
      <div>승인대기중</div>
      <div id="teacherWaiting">
        <div id="teacherWaitingTitle">
          <span className="titleTeacher">교사</span>
          <span className="titleTime">시간</span>
        </div>
        <div id="teacherWaitingList">
          {teachers.unapproved.map((teacher: any) => (
            <div className="waitingEl">
              <span className="nameResults">{teacher.teacherName}</span>
              <span className="timeResults">
                {changeTimeStamp(teacher.createdAt)}
              </span>
              <span className="teacherButtonArea1">
                <button
                  onClick={() => {
                    approveButton(teacher.teacherId);
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
          <span className="titleSelect">선택</span>
          <span className="titleTeacherr">교사</span>
          <span className="titleClass">반</span>
        </div>
        <div id="teacherManageList">
          {teachers.approved.map((teacher: any) => (
            <div className="waitingEl">
              <input
                type="radio"
                className=""
                onChange={(e) => {
                  onCheckedTeacher(e);
                }}
                name="teacherList"
                value={teacher.teacherId}
              ></input>
              <span className="indiTeacher">{teacher.teacherName}</span>
              <span>
                {!teacher.classs
                  ? '아직 반 없음'
                  : teacher.classs.teacherClassName}
              </span>
              <button
                onClick={() => {
                  approveButton(teacher.teacherId);
                }}
              >
                너해고
              </button>
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
                          value={classs.classId}
                          onChange={(e) => {
                            onCheckedClass(e);
                            console.log(checkedClass.classId);
                          }}
                        ></input>
                        <span>{classs.className}</span>
                      </div>
                    ))}
                  </div>,
                );
              }}
            >
              반 변경
            </button>
            <button
              onClick={() => {
                console.log(checkedTeacher, checkedClass);
                changeClassButton(
                  checkedTeacher.teacherId,
                  checkedClass.classId,
                );
              }}
            >
              보내기
            </button>
          </div>
        </div>
      </div>
    </TeacherManageWrap>
  ) : (
    <div></div>
  );
}

export default TeacherManage;

const TeacherManageWrap = styled.div`
  #teacherWaitingTitle {
    border-bottom: solid 1px;
    display: flex;
    .titleTeacher {
      margin-left: 30px;
      flex: 1 0 auto;
    }
    .titleTime {
      flex: 3 0 auto;
    }
  }
  #teacherWaiting {
    border: solid 1px;
    border-radius: 5px;
  }

  #teacherWaitingList {
    margin-left: 20px;
    .waitingEl {
      display: flex;
    }
    .nameResults {
      flex: 1 0 auto;
    }
    .timeResults {
      flex: 3 0 auto;
    }
  }
  #teacherManage {
    border: solid 1px;
    border-radius: 5px;
  }

  #teacherManageTitle {
    border-bottom: solid 1px;
    display: flex;
    .titleSelect {
      flex: 1 0 auto;
      margin-left: 30px;
    }
    .titleTeacherr {
      flex: 1 0 auto;
    }
    .titleClass {
      flex: 2 0 auto;
    }
  }
  .teacherButtonArea1 {
  }
  #teacherButtonArea2 {
    text-align: center;
  }
`;

const Button = styled.button`
  ${({ theme }) => theme.common.defaultButton}
  margin : 0 2% 0 2%;
`;
