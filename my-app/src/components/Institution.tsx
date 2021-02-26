import React from 'react';
interface Props {
  instiInputs: Record<string, unknown>;
  institution: boolean;
  onChangeInsti: any;
  errormessage: string;
  handleInstitution: any;
}
function Institution({
  instiInputs,
  institution,
  onChangeInsti,
  errormessage,
  handleInstitution,
}: Props) {
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
      <div>{errormessage}</div>
      <button
        onClick={() =>
          handleInstitution(instiInputs.institutionName, instiInputs.master)
        }
      >
        다음
      </button>
    </div>
  ) : (
    <div></div>
  );
}

export default Institution;
