import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { ListForm } from '../components/Index';
export default function IndiNotice() {
  return (
    <Wrap>
      <Switch>
        <Route exact path="/main/indi_notice">
          <ListForm
            title="알림장"
            fristCategory="월별"
            secondCategory="일별"
          ></ListForm>
        </Route>
        <Route exact path="/main/indi_notice/post"></Route>
      </Switch>
      {/* <ContentCard>
        <Title>알림장</Title>
      </ContentCard> */}
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;
const ContentCard = styled.div`
  ${({ theme }) => theme.common.contentCardDiv}
`;
const Title = styled.div`
  ${({ theme }) => theme.common.contentTitle}
`;
