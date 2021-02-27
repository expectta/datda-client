import React from 'react';
import styled from 'styled-components';
export default function Profile() {
  return (
    <Wrap>
      <ContentCard>
        <Title>프로필</Title>
        <div id="profileName">
          <span>이름</span>
        </div>
      </ContentCard>
    </Wrap>
  );
}
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
