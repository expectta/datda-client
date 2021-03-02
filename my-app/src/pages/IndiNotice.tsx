import React from 'react';
import styled from 'styled-components';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { ListForm, WriteForm } from '../components/Index';
interface propsType {
  location: RouteComponentProps['location'];
  history: RouteComponentProps['history'];
  match: RouteComponentProps['match'];
}
export default function IndiNotice({ match }: propsType) {
  return (
    <Wrap>
      <Switch>
        <Route exact path={`${match.path}`}>
          <ListForm
            title="알림장"
            fristCategory="월별"
            secondCategory="일별"
          ></ListForm>
        </Route>
        <Route exact path={`${match.path}/write`}>
          <WriteForm title="알림장 작성" type="indiNotice"></WriteForm>
        </Route>
      </Switch>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 100%;
  height: 97%;
`;
