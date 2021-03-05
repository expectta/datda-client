import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export default function Profile() {
  const [userInfo, setUserInfo] = useState({
    userName: '김철수',
    permission: 'teacher',
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
        <div id="profile">
          <div id="profileArea">
            <div id="flexLeft">
              <AvatarCard
                src="../images/defaultAvatar.png"
                alt="avatar"
              ></AvatarCard>
              <div id="profileButton">
                <Link to="/main/profile/institution">
                  <Button>기관등록</Button>
                </Link>
                <Link to="/main/profile/children">
                  <Button>아이등록</Button>
                </Link>
              </div>
            </div>
            <div id="contentsWrap">
              {userInfo.permission !== 'institution' ? (
                <>
                  <div className="profile name">
                    <span className="blue">이름 </span>
                    <span>{userInfo.userName}</span>
                  </div>
                  <div className="profile email">
                    <span className="blue">이메일 </span>
                    <span>{userInfo.email}</span>
                  </div>
                  <div className="profile mobile">
                    <span className="blue">전화번호 </span>
                    <span>{userInfo.mobile}</span>
                  </div>
                  <div className="profile role">
                    <span className="blue">저는 </span>
                    <span>{userInfo.role}</span>
                    <span className="blue">입니다.</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="profile name">
                    <span className="blue">기관이름 </span>
                    <span>{userInfo.institution}</span>
                  </div>
                  <div className="profile email">
                    <span className="blue">이메일 </span>
                    <span>{userInfo.email}</span>
                  </div>
                  <div className="profile mobile">
                    <span className="blue">전화번호 </span>
                    <span>{userInfo.mobile}</span>
                  </div>
                  <div className="profile role">
                    <span className="blue">지위 </span>
                    <span>원장</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {userInfo.permission !== 'institution' ? (
            <>
              <div className="blue">원아관리</div>
              <div id="profileChildList">
                {userInfo.childrenName.map((child) => (
                  <div>{child}</div>
                ))}
              </div>
              <div className="blue">기관목록</div>
              <div id="profileInstiList">
                <div>{userInfo.institution}</div>
              </div>
            </>
          ) : (
            <div></div>
          )}

          <div id="complete">
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
    padding-left: 3%;
    flex: 3 1 auto;
  }
  #flexLeft {
    flex: 1 1 auto;
  }
  #profile {
    padding-left: 5%;
  }
  .profile {
    margin-bottom: 13%;
  }
  #profileArea {
    display: flex;
  }
  #complete {
    text-align: center;
    margin-bottom: 5%;
  }
  .blue {
    color: blue;
  }
  #profileChildList {
    border: solid 1px;
    border-radius: 10px;
  }
  #profileInstiList {
    border: solid 1px;
    border-radius: 10px;
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
  margin : 0 2% 0 2%;
`;

const AvatarCard = styled.img`
  overflow: hidden;
  resize: both;
  width: 200px;
`;
