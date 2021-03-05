import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ListInnerCard } from './Index';
import { notice } from '../assets/testdata';
interface propsType {
  userInfo: any;
}
export default function MiniIndiNotice({ userInfo }: propsType) {
  return (
    <Wrap>
      <Title>알림장</Title>
      <NoticeContainar>
        {userInfo.mainData.data.indiNotice.map(
          (element: any, index: number) => {
            return (
              <ListInnerCard
                noticeId={element.noticeId}
                key={element.noticeId}
                title={element.contents}
                createAt={element.create_at}
              ></ListInnerCard>
            );
          },
        )}
      </NoticeContainar>
      <More to="/main/indi_notice">더보기</More>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 95%;
  height: 20%;
  margin: 0 auto;
`;
const Title = styled.label`
  width: 95%;
  margin: 0 auto;
  font-size: 1.5rem;
  text-align: center;
`;
const NoticeContainar = styled.div`
  width: 100%;
  height: 80%;
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
const More = styled(Link)<any>`
  display: block;
  padding: 2%;
  text-align: end;
`;
