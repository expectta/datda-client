import React, { useState } from 'react';
import styled from 'styled-components';
export default function Profile() {
  const [userInfo, setUserInfo] = useState({
    userName: '김철수',
    email: '철수@네이버',
    mobile: '',
    role: '선생님',
    childrenName: ['김민수', '김연야'],
  });
  return (
    <Wrap>
      <ContentCard>
        <Title>프로필</Title>
        <div className="profile name">
          <span>이름 </span>
          <span>{userInfo.userName}</span>
        </div>
        <div className="profile email">
          <span>이메일 </span>
          <span>{userInfo.email}</span>
        </div>
        <div className="profile mobile">
          <span>전화번호</span>
          <span>{userInfo.mobile}</span>
        </div>
        <div className="profile role">
          <span>저는 </span>
          <span>{userInfo.role}</span>
          <span>입니다.</span>
        </div>
        <div className="profile childrenName">
          <span>아이들 </span>
          {userInfo.childrenName.map((user: string) => (
            <span>{user}</span>
          ))}
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
