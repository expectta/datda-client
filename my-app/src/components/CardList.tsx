import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../assets/theme';
export default function MealList() {
  return (
    <>
      <Wrap>
        <Title>급식표</Title>

        <SubMenu>
          <FristMenu>{'월별'}</FristMenu>
          <SecondMenu>{'일별'}</SecondMenu>
        </SubMenu>
        <CardContainer>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </CardContainer>
      </Wrap>
      <ButtonWrapper>
        <WirteButton to="/main/meal/write">작성</WirteButton>
      </ButtonWrapper>
    </>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 90%;
  overflow: auto;
  margin-bottom: 3%;
`;

const Card = styled.div`
  height: 300px;
  // ${({ theme }) => theme.common.defaultCardDiv}
`;
const CardContainer = styled.div`
  padding: 2%;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  //암시적 로우 크기 (아이템이 생성될떄마다 생성)
  grid-auto-rows: 300px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2%;
`;

const ButtonWrapper = styled.div`
  width: 95%;
  text-align: center;
  margin: 0 auto;
`;
const WirteButton = styled(Link)`
  ${({ theme }) => theme.common.defaultButton}
`;

const SubMenu = styled.div`
  display: flex;
`;
const FristMenu = styled.span`
  flex: 1 auto;
  margin-left: 3%;
`;
const SecondMenu = styled.span`
  flex: 11 auto;
`;
const Title = styled.div`
  ${({ theme }) => theme.common.contentTitle}
`;
