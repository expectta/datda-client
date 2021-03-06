import React, { useState } from 'react';
import styled from 'styled-components';
import { ClassManage, TeacherManage, StudentManage } from '../components/Index';
interface Props {
  setModalMessage: any;
  setModalVisible: any;
}
function CreateClass({ setModalMessage, setModalVisible }: Props) {
  const [isClass, setIsClass] = useState<boolean>(false);
  const [isTeacher, setIsTeacher] = useState<boolean>(true);
  const [isStudent, setIsStudent] = useState<boolean>(false);

  const [classInfo, setClassInfo] = useState([
    { className: '새싹반', classId: '1', userName: 'a' },
    { className: '별빛반', classId: '2', userName: 'a' },
  ]);

  const [teachers, setTeachers] = useState([
    { userName: '이인수', userId: '1', created_at: '2021-03-01' },
  ]);

  const [students, setStudents] = useState([
    { userName: 'a', userId: '1', className: 'a', classId: '1' },
  ]);

  const toggleClass = () => {
    setIsClass(true);
    setIsTeacher(false);
    setIsStudent(false);
  };

  const toggleTeacher = () => {
    setIsClass(false);
    setIsTeacher(true);
    setIsStudent(false);
  };

  const toggleStudent = () => {
    setIsClass(false);
    setIsTeacher(false);
    setIsStudent(true);
  };
  return (
    <Wrap>
      <h3>{isClass ? '반 구성' : isTeacher ? '선생님 관리' : '원아 관리'}</h3>
      <div>
        <button className="manageType" onClick={() => toggleTeacher()}>
          교사관리
        </button>
        <button className="manageType" onClick={() => toggleStudent()}>
          원아관리
        </button>
        <button className="manageType" onClick={() => toggleClass()}>
          반관리
        </button>
      </div>

      <TeacherManage isTeacher={isTeacher} teachers={teachers} />
      <StudentManage
        classInfo={classInfo}
        isStudent={isStudent}
        students={students}
        setModalMessage={setModalMessage}
        setModalVisible={setModalVisible}
      />
      <ClassManage
        isClass={isClass}
        classInfo={classInfo}
        setModalMessage={setModalMessage}
        setModalVisible={setModalVisible}
      />
    </Wrap>
  );
}
export default CreateClass;

const Wrap = styled.div`
  width: 100%;
  height: 97%;
  .teacherArea {
    background-color: pink;
  }
  .classList {
    display: inline-block;
    border: solid 1px;
    border-radius: 5px;
    width: 60%;
    height: 5%;
    padding-left: 2%;
  }
  #student {
    #studentListArea {
      border: solid 1px;
      height: 400px;
      border-radius: 5px;
      overflow: scroll;
    }
    #studentTitleList {
      border-bottom: solid 1px;
    }
    #studentButtonArea {
      text-align: center;
      bottom: 0px;
    }
  }
  #teacher {
    #teacherWaitingTitle {
      border-bottom: solid 1px;
    }
    #teacherWaiting {
      border: solid 1px;
      border-radius: 5px;
    }
    #teacherManage {
      border: solid 1px;
      border-radius: 5px;
    }
    #teacherManageTitle {
      border-bottom: solid 1px;
    }
    .teacherButtonArea1 {
    }
    #teacherButtonArea2 {
      text-align: center;
    }
  }
  .manageType {
    margin: 2%;
  }
  .indiTeacher {
    text-align: center;
  }
`;
