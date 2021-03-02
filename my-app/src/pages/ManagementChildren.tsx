import React from 'react';
import styled from 'styled-components';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
import { CardList, StateListForm, WriteForm } from '../components/Index';
interface propsType {
  location: RouteComponentProps['location'];
  history: RouteComponentProps['history'];
  match: RouteComponentProps['match'];
}
export default function Management({ match }: propsType) {
  return (
    <Wrap>
      <Switch>
        <Route exact path={`${match.path}`}>
          <StateListForm
            title="원아 상태관리"
            fristCategory="전체"
            secondCategory="반별"
          ></StateListForm>
        </Route>
        <Route pasth={`${match.path}/write`}>
          <WriteForm title="급식표 등록" type="meal"></WriteForm>
        </Route>
      </Switch>
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
