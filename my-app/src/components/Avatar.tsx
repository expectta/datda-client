import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
interface propsType {
  userInfo: userInfoType;
}
interface userInfoType {
  userId: string;
  permission: string;
  institution: string;
  isLogin: boolean;
}
export default function Avatar({ userInfo }: propsType) {
  console.log(userInfo.institution, '=기관이름', userInfo.permission, '=권한');
  return (
    <Wrap>
      <AvatarCard src="../images/defaultAvatar.png" alt="avatar"></AvatarCard>{' '}
      <NameTagWrap>
        {(() => {
          if (userInfo.permission === 'parents') {
            return (
              <>
                <ClassWrap>
                  {'밀알어린이집'}
                  {'새싹반'}
                </ClassWrap>
                <NameTag>{'이유정'} 어린이</NameTag>
              </>
            );
          }
          return <NameTag id="institution">{userInfo.institution} </NameTag>;
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
