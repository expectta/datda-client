import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Props {
  instiInfo: any;
  setInsti: any;
}

function SelectionInstitution({ instiInfo, setInsti }: Props) {
  //검색
  const searchInsti = () => {
    axios.get('https://datda');
  };
  return (
    <Wrap>
      <ContentCard>
        <h1>기관을 선택해주세요</h1>
        <div>
          <input type="text"></input>
          <button>검색</button>
        </div>
        {instiInfo.map((insti: any) => (
          <div>
            <input
              type="radio"
              value={insti.institutionId}
              name="institution"
            ></input>
            <span>{insti.institutionName}</span>
          </div>
        ))}
        <div>
          {JSON.parse(localStorage.getItem('loginInfo')!).permission ===
          'teacher' ? (
            <Link to="/main/profile">
              <Button>선택 완료</Button>
            </Link>
          ) : (
            <Link to="/main/profile/children">
              <Button>아이 등록</Button>
            </Link>
          )}
        </div>
      </ContentCard>
    </Wrap>
  );
}

export default SelectionInstitution;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentCard = styled.div`
  ${({ theme }) => theme.common.contentCardDiv}
`;
const Title = styled.div`
  ${({ theme }) => theme.common.contentTitle}
`;
const Button = styled.button`
  ${({ theme }) => theme.common.defaultButton}
  margin : 0 5% 0 5%;
`;
