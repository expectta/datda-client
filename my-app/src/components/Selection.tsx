import React from 'react';

interface Props {
  selection: boolean;
  handleSelection: any;
  onChange: any;
}
function Selection({ selection, handleSelection, onChange }: Props) {
  return (
    <div>
      {selection ? (
        <div>
          <div>가입유형</div>
          <select
            onChange={(e) => {
              onChange('permission', e);
            }}
          >
            <option value="">가입유형을 선택해주세요</option>
            <option value="parent">학부모</option>
            <option value="teacher">선생님</option>
            <option value="institution">기관</option>
          </select>
          <div>
            <button onClick={() => handleSelection()}>일반가입</button>
            <button>카카오톡 가입</button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );

  //   selection ? (
  //   <div className="selection">
  //     <div>
  //       <button onClick={() => handleSelection('parent')}>
  //         학부모 회원가입
  //       </button>
  //       <button onClick={() => handleSelection('teacher')}>
  //         선생님 회원가입
  //       </button>
  //       <button onClick={() => handleIsInsti('institution')}>기관 등록</button>
  //     </div>
  //     ):(<div></div>);
  //     {socialSelection?(<div>
  //       <div>
  //         <button>일반 회원가입</button>
  //         <button>Kakao 회원가입</button>
  //       </div>
  //     </div>):<div></div>}
  //   </div>
  // )
}

export default Selection;
