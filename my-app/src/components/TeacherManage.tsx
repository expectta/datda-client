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
      <UnapprovedArea>
        <div className="subTitle">승인대기중</div>
        <div id="teacherWaiting">
          <div id="teacherWaitingTitle">
            <span className="titleTeacher">교사</span>
            <span className="titleTime">시간</span>
            <span className="titleBlank" />
          </div>
          <div id="teacherWaitingList">
            {teachers.unapproved.map((teacher: any) => (
              <div className="waitingEl">
                <span className="nameResults">{teacher.teacherName}</span>
                <span className="timeResults">
                  {changeTimeStamp(teacher.createdAt)}
                </span>
                <UnclickedButton
                  className="approvedButton"
                  onClick={() => {
                    approveButton(teacher.teacherId);
                  }}
                >
                  수락
                </UnclickedButton>
                {/* <button>보류</button>
                <button>거절</button> */}
              </div>
            ))}
          </div>
        </div>
      </UnapprovedArea>
      <ApprovedArea>
        <div className="subTitle">교사관리</div>
        <div id="teacherManage">
          <div id="teacherManageTitle">
            <span className="titleSelect">선택</span>
            <span className="titleTeacherr">교사</span>
            <span className="titleClass">반</span>
            <span className="titleButton"></span>
          </div>
          <div id="teacherManageList">
            <div id="manageListArea">
              {teachers.approved.map((teacher: any) => (
                <div className="managingEl">
                  <input
                    className="manageRadio"
                    type="radio"
                    onChange={(e) => {
                      onCheckedTeacher(e);
                    }}
                    name="teacherList"
                    value={teacher.teacherId}
                  ></input>
                  <span className="manageTeacher">{teacher.teacherName}</span>
                  <span className="manageClass">
                    {!teacher.classs
                      ? '아직 반 없음'
                      : teacher.classs.teacherClassName}
                  </span>
                  <UnclickedButton
                    className="unapprovedButton"
                    onClick={() => {
                      approveButton(teacher.teacherId);
                    }}
                  >
                    미승인
                  </UnclickedButton>
                </div>
              ))}
            </div>
            <div id="teacherButtonArea2">
              <PostButton
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
              </PostButton>
              <PostButton
                onClick={() => {
                  console.log(checkedTeacher, checkedClass);
                  changeClassButton(
                    checkedTeacher.teacherId,
                    checkedClass.classId,
                  );
                }}
              >
                보내기
              </PostButton>
            </div>
          </div>
        </div>
      </ApprovedArea>
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
    width: 100%;
    .titleTeacher {
      text-align: center;
      width: 100%;
      flex: 1 auto;
      padding-left: 20px;
    }
    .titleTime {
      text-align: center;
      width: 100%;
      flex: 1 auto;
    }
    .titleBlank {
      width: 41%;
      flex: 1 auto;
    }
  }
  .subTitle {
    color: #6f6eff;
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
  #teacherWaiting {
    border: solid 1px;
    border-radius: 5px;
    overflow: scroll;
  }

  #teacherWaitingList {
    margin-left: 20px;
    .waitingEl {
      display: flex;
      width: 100%;
      margin: 1% 0 1% 0;
    }
    .nameResults {
      flex: 1 auto;
      width: 100%;
      text-align: center;
    }
    .timeResults {
      flex: 1 auto;
      width: 100%;
      text-align: center;
    }
    .approvedButton {
      flex: 1 auto;
      width: 25%;
    }
  }
  #teacherManage {
    border: solid 1px;
    border-radius: 5px;
    height: 51vh;
    #teacherManageList {
      overflow: scroll;
      #manageListArea {
        height: 42vh;
      }
    }
    #teacherManageTitle {
      border-bottom: solid 1px;
      display: flex;
      .titleSelect {
        text-align: center;
        width: 100%;
        flex: 1 auto;
      }
      .titleTeacherr {
        text-align: center;
        width: 100%;
        flex: 1 auto;
      }
      .titleClass {
        text-align: center;
        width: 100%;
        flex: 1 auto;
      }
      .titleButton {
        width: 61%;
        flex: 1 auto;
      }
    }
  }

  .managingEl {
    display: flex;
    margin: 1% 0 1% 0;
    .manageRadio {
      width: 100%;
      flex: 1 auto;
    }
    .manageTeacher {
      text-align: center;
      width: 100%;
      flex: 1 auto;
    }
    .manageClass {
      text-align: center;
      width: 100%;
      flex: 1 auto;
    }
    .unapprovedButton {
      width: 31%;
      flex: 1 auto;
    }
  }

  #teacherButtonArea2 {
    text-align: center;
  }
`;

const UnclickedButton = styled.button`
  ${({ theme }) => theme.common.unclickedButtonStyle}
  margin : 0 2% 0 2%;
  width: 100%;
`;

const PostButton = styled.button`
  ${({ theme }) => theme.common.unclickedButtonStyle}
  margin : 0 2% 0 2%;
`;

const UnapprovedArea = styled.div`
  margin-bottom: 10%;
`;

const ApprovedArea = styled.div``;
