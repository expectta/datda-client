import React, { useState } from 'react';
import styled from 'styled-components';

function Report() {
  return (
    <Wrap>
      <ContentCard>
        <Title>닿다에게 알려주세요</Title>
        <div className="report name">
          <span>이름</span>
          <input className="report name" type="text"></input>
        </div>
        <div className="report title">
          <span>제목</span>
          <input className="report title" type="text"></input>
        </div>
        <div className="report contents">
          <span>내용</span>
          <input className="report content" type="text"></input>
        </div>
        <div>
          <button>제출</button>
        </div>
      </ContentCard>
    </Wrap>
  );
}
export default Report;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;
const ContentCard = styled.div`
  ${({ theme }) => theme.common.contentCardDiv}
  .report {
    width: 61vw;
  }
  .content {
    height: 50vh;
  }
`;

const Title = styled.div`
  ${({ theme }) => theme.common.contentTitle}
`;
