import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { changeTimeStamp } from '../common/utils/changeTimeStamp';

interface propsType {
  userId?: string;
  userName?: string;
  createdAt?: string;
  classId?: string;
  className?: string;
  content?: any;
  title?: string;
  category?: string;
}

export default function ListInnerCard(props: propsType) {
  const urlMatch = useRouteMatch();

  // 공지사항 리스트 상태
  const { content, title, category, createdAt } = props;
  // 투약의뢰서 리스트 상태
  const { userId, userName, classId, className } = props;
  return (
    <>
      <NoticeCard
        id={content.contentId}
        to={`${urlMatch.path}/post/${content.noticeId}`}
      >
        <Point>* </Point>
        <Content> {title}</Content>
        <Writer>{content.writer}</Writer>
        <CreateAt>
          {content ? changeTimeStamp(content.createdAt) : '누구냐'}
        </CreateAt>
      </NoticeCard>
    </>
  );
}
const Point = styled.div`
  width: 4%;
`;

const NoticeCard = styled(Link)<any>`
  display: flex;
  padding: 1%;
  cursor: pointer;
`;

const CreateAt = styled.div`
  width: 30%;
  text-align: end;

  margin: 0 auto;
  color: #bcbbbb;
  align-self: center;
`;
const Content = styled.div`
  width: 66%;
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
const Writer = styled.div`
  width: 30%;
  text-align: end;

  margin: 0 auto;
  color: #bcbbbb;
  align-self: center;
`;
