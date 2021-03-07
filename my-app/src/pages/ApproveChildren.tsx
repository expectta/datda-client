import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { requestApproveChild } from '../common/axios';

export default function ApproveChildren() {
  // 승인된 원아들
  const [approveChildren, setApproveChildren] = useState({
    approved: [],
    changedChildId: null,
    unapproved: [],
  });
  //승인,미승인 원아 리스트 요청
  async function handleApproveChildren() {
    const chilrenList = await requestApproveChild();
    if (chilrenList) {
      setApproveChildren({
        approved: chilrenList.approved,
        changedChildId: chilrenList.changedChildId,
        unapproved: chilrenList.unapproved,
      });
    }
  }
  // 승인,미승인 원아 상태 확인
  useEffect(() => {
    console.log(approveChildren, '승인');
  }, [approveChildren]);
  // 해당 페이지 랜딩 후 1회 승인, 미승인 원아 리스트 요청
  useEffect(() => {
    handleApproveChildren();
  }, []);
  return (
    <>
      <Wrap>
        <Title>{'원아승인'}</Title>
        <Container>
          <SubTitle>승인대기중</SubTitle>
          <ContentWrapper>
            <CategoryWrapper>
              <FristCategory>어린이</FristCategory>
              <SecondCategory>시간</SecondCategory>
              <ThirdCategory>보호자</ThirdCategory>
            </CategoryWrapper>
            <Contents>
              {approveChildren.approved.map((element: any, index: number) => {
                return (
                  <>
                    <CardWrapper key={element.childId}>
                      <Wrapper>
                        <CardName>{element.childName} 어린이</CardName>
                        <CardTime>{element.createdAt}</CardTime>
                        <CardParent>{element.user.parentName}</CardParent>
                      </Wrapper>
                      <CardButtonWrapper>
                        <CardAllowButton>수락</CardAllowButton>
                      </CardButtonWrapper>
                    </CardWrapper>
                  </>
                );
              })}
            </Contents>
          </ContentWrapper>
          <SubTitle>승인완료</SubTitle>
          <ContentWrapper>
            <CategoryWrapper>
              <FristCategory>어린이</FristCategory>
              <SecondCategory>시간</SecondCategory>
              <ThirdCategory>보호자</ThirdCategory>
            </CategoryWrapper>
            <Contents>
              {approveChildren.unapproved.map((element: any, index: number) => {
                return (
                  <>
                    <CardWrapper key={element.childId}>
                      <Wrapper>
                        <CardName>{element.childName} 어린이</CardName>
                        <CardTime>{element.createdAt}</CardTime>
                        <CardParent>{element.user.parentName}</CardParent>
                      </Wrapper>
                      <CardButtonWrapper>
                        <CardAllowButton>승인해제</CardAllowButton>{' '}
                      </CardButtonWrapper>
                    </CardWrapper>
                  </>
                );
              })}
            </Contents>
          </ContentWrapper>
        </Container>
        <ButtonWrapper>
          <WireButton to="/main">닫기</WireButton>
        </ButtonWrapper>
      </Wrap>
    </>
  );
}
const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;
const Title = styled.div`
  ${({ theme }) => theme.common.contentTitle}
`;

const Container = styled.div`
  width: 95%;
  height: 85%;
  margin: 0 auto;

  margin-bottom: 3%;
`;

const ButtonWrapper = styled.div`
  width: 95%;
  text-align: center;
  margin: 0 auto;
`;
const WireButton = styled(Link)<any>`
  text-decoration: none;
  ${({ theme }) => theme.common.defaultButton}
`;

const SubTitle = styled.div`
  width: 100%;
  height: 3%;
  color: #6f6eff;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: 45%;
  margin: 0 auto;
  margin-bottom: 3%;
  border: 1px solid lightgray;
  border-radius: 12px;
`;
const CategoryWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  text-align: center;

  padding: 0% 3% 0% 3%;
  border-bottom: 1px solid lightgray;
  @media ${({ theme }) => theme.device.tablet} {
    text-align: center;
    span {
      flex: 1 auto;
    }
  } ;
`;

const FristCategory = styled.span`
  align-self: center;
  color: ${({ theme }) => theme.colors.gray};
  flex: 1 auto;
`;
const SecondCategory = styled.span`
  align-self: center;
  color: ${({ theme }) => theme.colors.gray};
  flex: 4 auto;
`;
const ThirdCategory = styled.span`
  align-self: center;
  color: ${({ theme }) => theme.colors.gray};
  flex: 5 auto;
`;
const Contents = styled.div`
  width: 100%;
  height: 90%;
  padding: 2%;
  overflow: auto;
  margin: 0 auto;
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  span {
    margin: 0% 2% 0% 2%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    display: grid;
    text-align-last: center;
    margin: 3% 0% 3% 0%;
    grid-gap: 10px;
};
  }
  color: ${({ theme }) => theme.colors.gray};
`;
const CardName = styled.span`
  flex: 1 auto;
`;
const CardTime = styled.span`
  flex: 2 auto;
`;
const CardParent = styled.span`
  flex: 1 auto;
`;
const CardButtonWrapper = styled.span`
  flex: 1 auto;
  text-align: end;
  align-self: center;
`;
const CardAllowButton = styled.span`
  ${({ theme }) => theme.common.unclickedButtonStyle}
  flex: 1 auto;
`;
const Wrapper = styled.span`
  flex: 3 auto;
  align-self: center;
  display: flex;
`;
