import React from 'react';
import styled from 'styled-components';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
import { CardList, WriteMeal, WriteForm } from '../components/Index';
interface propsType {
  location: RouteComponentProps['location'];
  history: RouteComponentProps['history'];
  match: RouteComponentProps['match'];
}
export default function Meal({ match }: propsType) {
  return (
    <Wrap>
      <Switch>
        <Route exact path={`${match.path}`}>
          <CardList
            title="급식표"
            imageTitle={'2월 급식표'}
            createdAt={'2021년 2월 2일'}
          ></CardList>
        </Route>
        <Route exact pasth={`${match.path}/write`}>
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
