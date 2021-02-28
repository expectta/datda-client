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

export default function ListInnerCard(props: propsType) {
  // 공지사항 리스트 상태
  const { noticeId, title, category, createAt } = props;
  // 투약의뢰서 리스트 상태
  const { userId, userName, classId, className } = props;
  return (
    <>
      <NoticeCard>
        <Point>* </Point>
        <Content> {title}</Content>
        <CreateAt>{createAt}</CreateAt>
      </NoticeCard>
    </>
  );
}
const Point = styled.div`
  flex: 0.5 auto;
`;

const NoticeCard = styled.div`
  display: flex;
  padding: 1%;
`;

const CreateAt = styled.div`
  margin: 0 auto;
  color: #bcbbbb;
  flex: inital;
  align-self: center;
`;
const Content = styled.div`
  align-self: center;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 12 auto;
  white-space: nowrap;
`;
const GoToPostButton = styled(Link)`
  flex: 1 auto;
  font-size: 3rem;
  color: #bcbbbb;
  text-decoration: none;
`;
