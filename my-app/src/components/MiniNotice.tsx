import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ListInnerCard } from './Index';

export default function MiniNotice() {
  return (
    <Wrap>
      <NoticeWrap>
        <Title>공지사항</Title>
        <NoticeContainar>
          <ListInnerCard></ListInnerCard>
        </NoticeContainar>
      </NoticeWrap>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 95%;
  height: 29%;
  margin: 0 auto;
`;
const NoticeWrap = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 100%;
  border-radius: 15px 15px 15px 15px;
  box-shadow: 0px 0px 5px #c8c8c8;
`;
const Title = styled.h4`
  width: 95%;
  height: 16%;
  margin: 0 auto;
  padding: 10px;
  color: lightgray;
  text-align: center;
  border-bottom: 1px solid lightgray;
`;
const NoticeContainar = styled.div`
  width: 95%;
  height: 84%;
  margin: 0 auto;
  overflow: auto;
`;

const GoToPostButton = styled(Link)`
  flex: 1 auto;
  font-size: 3rem;
  color: #bcbbbb;
`;
