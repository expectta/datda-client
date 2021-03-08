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
  //클래스 추가 창
  const [classInputs, setClassInputs] = useState({ className: '' });

  //모달창 열기
  const onModalClass = (value: any) => {
    setModalVisible(true);
    setModalMessage(value);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setClassInputs({ ...classInputs, className: value });
  };

  const addClass = (className: any) => {
    console.log(className);
  };

  return isClass ? (
    <div>
      {classInfo.map((classs: any) => (
        <div className="classArea">
          <input type="radio" value={classs.className} name="classList" />
          <span className="classList">{classs.className}</span>
        </div>
      ))}
      <div id="classButtonArea">
        <button
          onClick={() => {
            onModalClass(
              <div>
                <div>
                  <span>반이름 : </span>
                  <input
                    type="text"
                    placeholder="반 이름을 입력해주세요"
                    onChange={(e) => {
                      onChange(e);
                    }}
                  />
                </div>
                <button
                  onClick={() => {
                    addClass(classInputs.className);
                  }}
                >
                  반 추가
                </button>
              </div>,
            );
          }}
        >
          추가
        </button>
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
