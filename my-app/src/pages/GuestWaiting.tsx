import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function GuestWaiting() {
  const [classInfo, setClassInfo] = useState([]);

  const [instiInfo, setInstiInfo] = useState([]);
  return (
    <div>
      <div>닿다에 오신 것을</div>
      <div>환영합니다</div>
      <div id="instiInputArea">
        <div>기관검색</div>
        <div>
          <input type="text"></input>
          <button>검색</button>
        </div>
      </div>
      <div id="instiResults">
        {instiInfo.map((insti: any) => (
          <>
            <input type="radio" name="instiList" />
            <span>{insti.institutionName}</span>
          </>
        ))}
      </div>
      <div id="classInputArea">
        <div>반검색</div>
        <input type="text"></input>
        <button>검색</button>
        <div id="classResults">
          {classInfo.map((classs: any) => (
            <>
              <input type="radio" name="classList" />
              <span>{classs.className}</span>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
