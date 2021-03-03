import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ListInnerCard } from './Index';
import { notice } from '../assets/testdata';

export default function MiniNotice() {
  return (
    <Wrap>
      <Title>공지사항</Title>
      <NoticeContainar>
        {notice.data.map((element, index) => {
          return (
            <ListInnerCard
              noticeId={element.noticeId}
              key={index}
              title={element.title}
              category={element.category}
              createAt={element.created_at}
            ></ListInnerCard>
          );
        })}
      </NoticeContainar>
      <More to="/main/notice">더보기</More>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 95%;
  height: 20%;
  margin: 0 auto;
  margin-top: 2%;
`;
const NoticeWrap = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 80%;
  border-radius: 15px 15px 15px 15px;
  box-shadow: 0px 0px 5px #c8c8c8;
`;
const Title = styled.label`
  font-size: 1.5rem;
`;
const NoticeContainar = styled.div`
  width: 100%;
  height: 70%;
  overflow: auto;
`;

const GoToPostButton = styled(Link)`
  flex: 1 auto;
  font-size: 3rem;
  color: #bcbbbb;
`;
const More = styled(Link)<any>`
  display: block;
  padding: 2%;
  text-align: end;
`;
