import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { requestGetProfile } from '../common/axios';

interface Props {
  userInfo: {
    permission: string;
    isLogin: boolean;
    mainData: any;
    currentChild: number;
  };
}

export default function ProfileList({ userInfo }: Props) {
  const permission = JSON.parse(localStorage.getItem('loginInfo')!).permission;

  const [profileInfo, setProfileInfo] = useState<any>({
    basicInfo: '',
    approved: '',
    unapproved: '',
  });

  useEffect(() => {
    if (permission === 'teacher' || permission === 'institution') {
      getProfile();
    } else {
      getProfile(userInfo.mainData[userInfo.currentChild].childId);
    }
    console.log(profileInfo.approved);
  }, []);

  const getProfile = async (childId?: string | null) => {
    const results = await requestGetProfile(childId);
    if (results) {
      setProfileInfo({
        ...profileInfo,
        basicInfo: results.basicInfo,
        approved: results.approved,
        unapproved: results.unapproved,
      });
    }
  };

  const onChange = (key: any, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setProfileInfo({ ...profileInfo.basicInfo, [key]: value });
  };

  return profileInfo.basicInfo.length === 0 ? (
    <div>
      <img id="loading" src="../images/loading.gif" />
    </div>
  ) : (
    <Wrap>
      <ContentCard>
        <Title>프로필</Title>
        <div id="profile">
          <div id="profileArea">
            <div id="flexLeft">
              <AvatarCard
                src={
                  permission !== 'parent'
                    ? userInfo.mainData.profileImg
                    : userInfo.mainData[userInfo.currentChild].profileImg
                }
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
                    <span className="blue">
                      {permission === 'teacher' ? '이름' : '아이이름'}
                    </span>
                    <input
                      className="textBox"
                      type="text"
                      placeholder={profileInfo.basicInfo.name}
                      onChange={(e) => {
                        onChange('name', e);
                      }}
                    ></input>
                  </div>
                  <div className="profile email">
                    <span className="blue">이메일 </span>
                    <span className="emailText">
                      {profileInfo.basicInfo.email}
                    </span>
                  </div>
                  <div className="profile mobile">
                    <span className="blue">전화번호 </span>
                    <input
                      className="textBox"
                      type="text"
                      placeholder={profileInfo.basicInfo.mobile}
                      onChange={(e) => {
                        onChange('mobile', e);
                      }}
                    ></input>
                  </div>
                </>
              ) : (
                <>
                  <div className="profile name">
                    <span className="blue">기관이름 </span>
                    <input
                      className="textBox"
                      type="text"
                      placeholder={profileInfo.basicInfo.name}
                      onChange={(e) => {
                        onChange('institution', e);
                      }}
                    ></input>
                  </div>
                  <div className="profile email">
                    <span className="blue">이메일 </span>
                    <span className="emailText">
                      {profileInfo.basicInfo.email}
                    </span>
                  </div>
                  <div className="profile mobile">
                    <span className="blue">전화번호 </span>
                    <input
                      className="textBox"
                      type="text"
                      placeholder={profileInfo.basicInfo.mobile}
                      onChange={(e) => {
                        onChange('mobile', e);
                      }}
                    ></input>
                  </div>
                </>
              )}
            </div>
          </div>

          {JSON.parse(localStorage.getItem('loginInfo')!).permission ===
          'parent' ? (
            <>
              <div className="blue">승인된 내 아이들</div>
              <div id="profileApprovedList">
                {profileInfo.approved.map((child: any) => (
                  <div>
                    <span>{child.name}</span>
                    <span>{child.classs.className}</span>
                    <span>{child.institution.institutionName}</span>
                  </div>
                ))}
              </div>
              <div className="blue">승인 대기중인 내 아이들</div>
              <div id="profileUnapprovedList">
                {profileInfo.unapproved.map((child: any) => (
                  <div>
                    <span>{child.name}</span>
                    <span>{child.institution.institutionName}</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div></div>
          )}

          <div id="complete">
            <Button>수정</Button>
            <Link to="/main">
              <Button>확인</Button>
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
  #profileApprovedList {
    border: solid 1px;
    border-radius: 10px;
  }
  #profileUnapprovedList {
    border: solid 1px;
    border-radius: 10px;
  }
  .textBox {
    border: solid 0px;
    border-bottom: solid 1px;
  }
  .emailText {
    margin-left: 18px;
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
  margin : 4% 2% 0 2%;
`;

const AvatarCard = styled.img`
  overflow: hidden;
  resize: both;
  width: 200px;
  height: 200px;
`;
