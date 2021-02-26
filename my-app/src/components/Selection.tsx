import React from 'react';

interface Props {
  selection: boolean;
  handleSelection: any;
  handleIsInsti: any;
}
function Selection({ selection, handleSelection, handleIsInsti }: Props) {
  return (
    <div>
      {selection ? (
        <div>
          <button onClick={() => handleSelection('parent')}>
            학부모 회원가입
          </button>
          <button onClick={() => handleSelection('teacher')}>
            선생님 회원가입
          </button>
          <button onClick={() => handleIsInsti('institution')}>
            기관 등록
          </button>
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
