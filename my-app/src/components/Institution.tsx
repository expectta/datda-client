import React from 'react';
import { useHistory } from 'react-router-dom';
interface Props {
  institution: boolean;
  onChangeInsti: any;
  errormessage: string;
}
function Institution({ institution, onChangeInsti }: Props) {
  const history = useHistory();

  const setHistory = () => {
    history.push('/login');
  };
  return institution ? (
    <div className="institution">
      <div>
        <span>기관이름</span>
        <input
          type="text"
          onChange={(e) => onChangeInsti('institutionName', e)}
        ></input>
      </div>
      <div>
        <span>기관장</span>
        <input type="text" onChange={(e) => onChangeInsti('master', e)}></input>
      </div>
      <div>
        <span>분류</span>
        <input type="text" onChange={(e) => onChangeInsti('info', e)}></input>
      </div>
      <button onClick={setHistory}>가입완료</button>
    </div>
  ) : (
    <div></div>
  );
}

export default Institution;
