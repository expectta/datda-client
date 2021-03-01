import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ListInnerCard } from './Index';

export default function MiniIndiNotice() {
  return (
    <Wrap>
      <NoticeWrap>
        <Title>알림장</Title>
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
  margin-top: 15px;
`;
const NoticeWrap = styled.div`
  widths: 94%;
  height: 100%;
  border-radius: 15px 15px 15px 15px;
  box-shadow: 0px 0px 5px #c8c8c8;
`;
const Title = styled.h3`
  width: 95%;
  margin: 0 auto;
  font-size: 1.3rem;
  padding: 10px;
  color: lightgray;
  text-align: center;
  border-bottom: 1px solid lightgray;
`;
const NoticeContainar = styled.div`
  width: 95%;
  height: 83%;
  margin: 0 auto;
  overflow: auto;
`;
const NoticeCard = styled.div`
  ${({ theme }) => theme.common.noticeCardDiv}
`;
const SubTitle = styled.div`
  width: 100%;
  display: flex;

  border-bottom: 1px solid lightgray;
  height: 35%;
`;
const Contents = styled.div`
  width: 96%;
  margin: 0 auto;
  display: flex;
`;
const CreateAt = styled.div`
  width: 96%;
  margin: 0 auto;
  color: #bcbbbb;
  align-self: center;
`;
const Text = styled.span`
  flex: 22 auto;
  align-self: center;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const GoToPostButton = styled(Link)`
  flex: 1 auto;
  font-size: 3rem;
  color: #bcbbbb;
`;
