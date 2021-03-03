import React, { useState } from 'react';
import styled from 'styled-components';
import { ClassManage, TeacherManage, StudentManage } from '../components/Index';
interface Props {
  setModalMessage: any;
  setModalVisible: any;
}
function CreateClass({ setModalMessage, setModalVisible }: Props) {
  const [isClass, setIsClass] = useState<boolean>(true);
  const [isTeacher, setIsTeacher] = useState<boolean>(false);
  const [isStudent, setIsStudent] = useState<boolean>(false);

  const [classInfo, setClassInfo] = useState([
    { className: 'a', classId: '1', userName: 'a' },
  ]);

  const [teachers, setTeachers] = useState([{ userName: 'a', userId: '1' }]);

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
        <span className="manageType" onClick={() => toggleClass()}>
          반
        </span>
        <span className="manageType" onClick={() => toggleTeacher()}>
          선생님
        </span>
        <span className="manageType" onClick={() => toggleStudent()}>
          원아관리
        </span>
      </div>
      <ClassManage
        isClass={isClass}
        classInfo={classInfo}
        setModalMessage={setModalMessage}
        setModalVisible={setModalVisible}
      />
      <TeacherManage isTeacher={isTeacher} teachers={teachers} />
      <StudentManage
        isStudent={isStudent}
        students={students}
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
  .classArea {
    background-color: pink;
    border-radius: 10px;
  }
  .teacherArea {
    background-color: pink;
  }
  .studentArea {
    background-color: pink;
  }
  .manageType {
    margin: 2%;
  }
  .indiTeacher {
    text-align: center;
  }
`;
