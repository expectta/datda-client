import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { CardList, WriteMeal, WriteNotice } from '../components/Index';
export default function Meal() {
  return (
    <Wrap>
      <ContentCard>
        <Switch>
          <Route exact path="/main/meal" component={CardList} />
          <Route exact pasth="/main/meal/write" component={WriteMeal} />
        </Switch>
      </ContentCard>
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
