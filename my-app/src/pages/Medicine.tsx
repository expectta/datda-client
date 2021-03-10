import React from 'react';
import styled from 'styled-components';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { ListForm, TextAreaForm, WriteForm } from '../components/Index';

interface propsType {
  userInfo: any;
}
export default function Medicine({ userInfo }: propsType) {
  const urlMatch = useRouteMatch();
  return (
    <Wrap>
      <Switch>
        <Route exact path={`${urlMatch.path}`}>
          <ListForm
            contents={'임시'}
            permission={userInfo.permission}
            title="투약의뢰서"
            fristCategory="투약의뢰서"
            secondCategory="투약보고서"
          ></ListForm>
        </Route>
        <Route exact path={`${urlMatch.path}/write`}>
          <WriteForm
            userInfo={userInfo}
            title="투약의뢰서 작성"
            type="medicine"
          ></WriteForm>
        </Route>
      </Switch>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 97%;
`;
