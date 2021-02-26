import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface propsType {
  userId?: string;
  userName?: string;
  createAt?: string;
  classId?: string;
  className?: string;
  noticeId?: string;
  title?: string;
  category?: string;
}

export default function NoticeInnerCard(props: propsType) {
  // 공지사항 리스트 상태
  const { noticeId, title, category, createAt } = props;
  // 투약의뢰서 리스트 상태
  const { userId, userName, classId, className } = props;
  return (
    <>
      <NoticeCard>
        <SubTitle>
          <CreateAt>{createAt}</CreateAt>
        </SubTitle>
        <Contents>
          <Text> {title || '투약의뢰서'}</Text>
          <GoToPostButton to="/main/notice/post">{'>'}</GoToPostButton>
        </Contents>
      </NoticeCard>
    </>
  );
}

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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const GoToPostButton = styled(Link)`
  flex: 1 auto;
  font-size: 3rem;
  color: #bcbbbb;
  text-decoration: none;
`;
