import React, { useState } from 'react';
import styled from 'styled-components';

function Report() {
  const [report, setReport] = useState({ title: '', content: '' });

  const onChange = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setReport({ ...report, [key]: value });
  };
  return (
    <Wrap>
      <ContentCard>
        <Title>닿다에게 알려주세요</Title>
        <div className="report title">
          <span>제목</span>
          <input
            className="report title"
            type="text"
            onChange={(e) => {
              onChange('title', e);
            }}
          ></input>
        </div>
        <div className="report contents">
          <span>내용</span>
          <input
            className="report content"
            type="text"
            onChange={(e) => {
              onChange('content', e);
            }}
          ></input>
        </div>
        <div id="buttonArea">
          <Button>제출</Button>
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
    width: 40vw;
  }
  .content {
    height: 50vh;
  }
  #buttonArea {
    text-align: center;
    margin-top: 10%;
  }
  padding-left: 5%;
`;

const Title = styled.div`
  ${({ theme }) => theme.common.contentTitle}
`;

const Button = styled.button`
  ${({ theme }) => theme.common.defaultButton}
`;
