import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Avatar() {
  return (
    <Wrap>
      <AvatarCard src="../images/defaultAvatar.png" alt="avatar"></AvatarCard>{' '}
      <NameTagWrap>
        <ClassWrap>
          {'밀알어린이집'}
          {'새싹반'}
        </ClassWrap>
        <NameTag>{'이유정'} 어린이</NameTag>
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
  ${({ theme }) => theme.common.AvatarImageDiv}
`;

const NameTagWrap = styled.div`
  width: 45%;
  height: 50px;
  position: relative;
  background: white;
  border-radius: 0px 10px 10px 0px;
  top: -69px;
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
