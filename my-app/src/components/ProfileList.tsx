import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getProfile } from '../common/axios';
export default function Profile() {
  const [userInfo, setUserInfo] = useState({
    userName: '',
    email: '',
    mobile: '',
    role: '',
    childrenName: ['', ''],
    institution: '',
  });

  useEffect(() => {
    if (userInfo.email.length === 0) {
      console.log('음메');
      //getProfile();
    }
  }, []);

  const onChange = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUserInfo({ ...userInfo, [key]: value });
  };

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
              {JSON.parse(localStorage.getItem('loginInfo')!).permission ===
              'teacher' ? (
                <div id="profileButton">
                  <Link to="/main/profile/institution">
                    <Button>기관등록</Button>
                  </Link>
                </div>
              ) : JSON.parse(localStorage.getItem('loginInfo')!).permission ===
                'parent' ? (
                <div id="profileButton">
                  <Link to="/main/profile/institution">
                    <Button>아이등록</Button>
                  </Link>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div id="contentsWrap">
              {JSON.parse(localStorage.getItem('loginInfo')!).permission !==
              'institution' ? (
                <>
                  <div className="profile name">
                    <span className="blue">이름 </span>
                    <input
                      type="text"
                      placeholder={userInfo.userName}
                      onChange={(e) => {
                        onChange('userName', e);
                      }}
                    ></input>
                  </div>
                  <div className="profile email">
                    <span className="blue">이메일 </span>
                    <span>{userInfo.email}</span>
                  </div>
                  <div className="profile mobile">
                    <span className="blue">전화번호 </span>
                    <input
                      type="text"
                      placeholder={userInfo.mobile}
                      onChange={(e) => {
                        onChange('mobile', e);
                      }}
                    ></input>
                  </div>
                  <div className="profile role">
                    <span className="blue">저는 </span>
                    <input type="text" placeholder={userInfo.role}></input>
                    <span className="blue">입니다.</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="profile name">
                    <span className="blue">기관이름 </span>
                    <input
                      type="text"
                      placeholder={
                        userInfo.institution.length === 0
                          ? '기관명을 적어주세요'
                          : userInfo.institution
                      }
                      onChange={(e) => {
                        onChange('institution', e);
                      }}
                    ></input>
                  </div>
                  <div className="profile email">
                    <span className="blue">이메일 </span>
                    <span>{userInfo.email}</span>
                  </div>
                  <div className="profile mobile">
                    <span className="blue">전화번호 </span>
                    <input
                      type="text"
                      placeholder={userInfo.mobile}
                      onChange={(e) => {
                        onChange('mobile', e);
                      }}
                    ></input>
                  </div>
                  <div className="profile role">
                    <span className="blue">지위 </span>
                    <span>원장</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {JSON.parse(localStorage.getItem('loginInfo')!).permission !==
          'institution' ? (
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
