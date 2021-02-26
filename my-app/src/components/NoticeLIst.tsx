import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { notice } from '../assets/testdata';
import { ListInnerCard } from './Index';
interface propsType {
  match: any;
}
export default function NoticeList({ match }: propsType) {
  return (
    <Wrap>
      <ContentCard>
        <Title>공지사항</Title>
        <CategoryWrap>
          <CategoryNotice>공지사항</CategoryNotice>
          <CategoryEvent>행사</CategoryEvent>
          <CategoryYear>년도별 검색</CategoryYear>
        </CategoryWrap>
        <CardWrapper>
          {notice.data.map((notice, index) => {
            return (
              <ListInnerCard
                key={index}
                noticeId={notice.noticeId}
                title={notice.title}
                category={notice.category}
                createAt={notice.created_at}
              ></ListInnerCard>
            );
          })}
        </CardWrapper>
      </ContentCard>
      <ButtonWrapper>
        <WireButton to="/main/notice/write">작성</WireButton>
      </ButtonWrapper>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentCard = styled.div`
  margin-bottom: 3%;
  ${({ theme }) => theme.common.contentCardDiv}
`;
const Title = styled.div`
  ${({ theme }) => theme.common.contentTitle}
`;
const CategoryWrap = styled.div`
  width: 95%;
  height: auto;
  margin: 0 auto;
  display: flex;
`;
const CategoryNotice = styled.span`
  flex: 1 auto;
`;
const CategoryEvent = styled.span`
  flex: 1 auto;
`;
const CategoryYear = styled.span`
  flex: 11 auto;
  text-align: right;
`;
const CardWrapper = styled.div`
  width: 98%;
  height: 89%;
  margin: 0 auto;
  overflow: auto;
`;

const ButtonWrapper = styled.div`
  width: 95%;
  text-align: center;
  margin: 0 auto;
`;
const WireButton = styled(Link)`
  text-decoration: none;
  ${({ theme }) => theme.common.defaultButton}
`;
