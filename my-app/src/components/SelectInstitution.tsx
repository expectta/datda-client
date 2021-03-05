import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SelectionInstitution() {
  const [instiInfo, setInsti] = useState([
    { institutionName: '원암유치원', institutionId: '1', institutionPhoto: '' },
    { institutionName: '청암유치원', institutionId: '2', institutionPhoto: '' },
  ]);

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
        {instiInfo.map((insti) => (
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
          <Link to="/main/profile">
            <Button>선택 완료</Button>
          </Link>
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
