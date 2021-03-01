import React from 'react';
import styled from 'styled-components';
import { Link, Route, Switch, RouteComponentProps } from 'react-router-dom';
import { ListForm, TextAreaForm, WriteForm } from '../components/Index';
interface propsType {
  location: RouteComponentProps['location'];
  history: RouteComponentProps['history'];
  match: RouteComponentProps['match'];
}
export default function Medicine({ match }: propsType) {
  return (
    <Wrap>
      <Switch>
        <Route exact path={`${match.path}`}>
          <ListForm
            title="투약의뢰서"
            fristCategory="투약의뢰서"
            secondCategory="투약보고서"
          ></ListForm>
        </Route>
        <Route exact path={`${match.path}/write`}>
          <WriteForm title="투약의뢰서 작성" type="medicine"></WriteForm>
        </Route>
      </Switch>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 97%;
`;
