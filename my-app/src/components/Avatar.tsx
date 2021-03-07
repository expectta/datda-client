import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
interface propsType {
  userInfo: any;
}

export default function Avatar({ userInfo }: propsType) {
  return (
    <Wrap>
      {(() => {
        if (userInfo.permission === 'parent') {
          if (userInfo.mainData[userInfo.currentChild].profileImg) {
            return (
              <AvatarCard
                src={userInfo.mainData[userInfo.currentChild].profileImg}
                alt={userInfo.mainData[userInfo.currentChild].profileImg}
              ></AvatarCard>
            );
          }
          return (
            <AvatarCard
              src="../images/defaultAvatar.png"
              alt="avatar"
            ></AvatarCard>
          );
        }
        if (userInfo.mainData.profileImg) {
          return (
            <AvatarCard
              src={userInfo.mainData.profileImg}
              alt={userInfo.mainData.profileImg}
            ></AvatarCard>
          );
        }
        return (
          <AvatarCard
            src="../images/defaultAvatar.png"
            alt="avatar"
          ></AvatarCard>
        );
      })()}
      <NameTagWrap>
        {(() => {
          if (userInfo.permission === 'parent') {
            return (
              <>
                <ClassWrap>
                  {userInfo.mainData[userInfo.currentChild].institutionName}
                  {userInfo.mainData[userInfo.currentChild].className}
                </ClassWrap>
                <NameTag>
                  {userInfo.mainData[userInfo.currentChild].childName} 어린이
                </NameTag>
              </>
            );
          }
          return (
            <NameTag id="institution">
              {userInfo.mainData.institutionName}
            </NameTag>
          );
        })()}
      </NameTagWrap>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

const AvatarCard = styled.img`
  overflow: hidden;
  ${({ theme }) => theme.common.avatarImageDiv}
`;

const NameTagWrap = styled.div`
  width: fit-content;
  display: block;
  padding: 6%;
  height: 50px;
  position: relative;
  background: white;
  border-radius: 0px 10px 10px 0px;
  top: -69px;
  #institution {
    font-size: 1.3rem;
    align-self: center;
  }
`;
const ClassWrap = styled.div`
  width: 100%;
  height: 50%;
  place-content: center;
  align-items: flex-end;
  display: flex;
  color: lightgray;
  font-size: 0.7rem;
`;
const NameTag = styled.div`
  width: 100%;
  color: black;
  text-align: center;
  font-size: 1rem;
  height: auto;
`;
