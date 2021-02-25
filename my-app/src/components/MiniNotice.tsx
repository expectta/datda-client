import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function MiniNotice() {
  return (
    <Wrap>
      <NoticeWrap>
        <Title>공지사항</Title>
        <NoticeContainar>
          <NoticeCard>
            <SubTitle>
              <CreateAt>{'2021년 2월 20일'}</CreateAt>
            </SubTitle>
            <Contents>
              <Text> {'3월 2일 입학식이 있습니다!'}</Text>
              <GoToPostButton to="/">{'>'}</GoToPostButton>
            </Contents>
          </NoticeCard>
          <NoticeCard>
            <SubTitle>
              <CreateAt>{'2021년 2월 20일'}</CreateAt>
            </SubTitle>
            <Contents>
              <Text> {'3월 2일 입학식이 있습니다!'}</Text>
              <GoToPostButton to="/">{'>'}</GoToPostButton>
            </Contents>
          </NoticeCard>
          <NoticeCard>
            <SubTitle>
              <CreateAt>{'2021년 2월 20일'}</CreateAt>
            </SubTitle>
            <Contents>
              <Text> {'3월 2일 입학식이 있습니다!'}</Text>
              <GoToPostButton to="/">{'>'}</GoToPostButton>
            </Contents>
          </NoticeCard>
          <NoticeCard>
            <SubTitle>
              <CreateAt>{'2021년 2월 20일'}</CreateAt>
            </SubTitle>
            <Contents>
              <Text> {'3월 2일 입학식이 있습니다!'}</Text>
              <GoToPostButton to="/">{'>'}</GoToPostButton>
            </Contents>
          </NoticeCard>
        </NoticeContainar>
      </NoticeWrap>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 95%;
  height: 28%;
  margin: 0 auto;
`;
const NoticeWrap = styled.div`
  widths: 95%;
  height: 100%;
  border-radius: 15px 15px 15px 15px;
  box-shadow: 0px 0px 5px #c8c8c8;
`;
const Title = styled.h3`
  width: 95%;
  height: 17%;
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
  ${({ theme }) => theme.common.NoticeCardDiv}
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const GoToPostButton = styled(Link)`
  flex: 1 auto;
  font-size: 3rem;
  color: #bcbbbb;
`;
