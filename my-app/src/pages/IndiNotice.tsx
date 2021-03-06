import React from 'react';
import styled from 'styled-components';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { ListForm, WriteForm } from '../components/Index';
interface propsType {
  userInfo: any;
}
export default function IndiNotice({ userInfo }: propsType) {
  const urlMatch = useRouteMatch();
  return (
    <Wrap>
      <Switch>
        <Route exact path={`${urlMatch.path}`}>
          <ListForm
            title="알림장"
            fristCategory="월별"
            secondCategory="일별"
            permission={userInfo.permission}
          ></ListForm>
        </Route>
        <Route exact path={`${urlMatch.path}/write`}>
          <WriteForm
            userInfo={userInfo}
            title="알림장 작성"
            type="indiNotice"
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
