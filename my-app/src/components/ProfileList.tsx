import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export default function Profile() {
  const [userInfo, setUserInfo] = useState({
    userName: '김철수',
    email: '철수@네이버',
    mobile: '',
    role: '선생님',
    childrenName: ['김민수', '김연야'],
    institution: '원암유치원',
  });
  return (
    <Wrap>
      <ContentCard>
        <Title>프로필</Title>
        <div id="contentsWrap">
          <div className="profile name">
            <span>이름 </span>
            <span>{userInfo.userName}</span>
          </div>
          <div className="profile email">
            <span>이메일 </span>
            <span>{userInfo.email}</span>
          </div>
          <div className="profile mobile">
            <span>전화번호 </span>
            <span>{userInfo.mobile}</span>
          </div>
          <div className="profile role">
            <span>저는 </span>
            <span>{userInfo.role}</span>
            <span>입니다.</span>
          </div>
          <div className="profile institution">
            <span>기관 </span>
            <span>{userInfo.institution}</span>
          </div>
          <div className="profile childrenName">
            <span>아이들 </span>
            {userInfo.childrenName.map((user: string) => (
              <div>
                <span>{user}</span>
              </div>
            ))}
          </div>
          <div className="buttonArea">
            <Link to="/main/profile/institution">
              <Button>기관등록</Button>
            </Link>
            <Link to="/main/profile/children">
              <Button>아이등록</Button>
            </Link>
          </div>
          <div className="buttonArea">
            <Link to="/main">
              <Button>완료</Button>
            </Link>
          </div>
        </div>
      </ContentCard>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  #contentsWrap {
    padding-left: 5%;
  }
  .profile {
    margin: 1%;
  }
  .buttonArea {
    text-align: center;
    margin-bottom: 5%;
  }
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
