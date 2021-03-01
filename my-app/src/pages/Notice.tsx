import React from 'react';
import styled from 'styled-components';
import { Link, Route, Switch, RouteComponentProps } from 'react-router-dom';
import {
  ReadForm,
  ListForm,
  WriteNotice,
  WriteForm,
} from '../components/Index';
interface propsType {
  location: RouteComponentProps['location'];
  history: RouteComponentProps['history'];
  match: RouteComponentProps['match'];
}
function Notice({ match }: propsType) {
  return (
    <Wrap>
      <Switch>
        <Route exact path={`${match.path}`}>
          <ListForm
            title="공지사항"
            fristCategory="공지사항"
            secondCategory="행사"
          ></ListForm>
        </Route>
        <Route exact path={`${match.path}/write`}>
          <WriteForm title="공지사항 작성" type="notice"></WriteForm>
        </Route>
        <Route exact path={`${match.path}/post`}>
          <ReadForm title="공지사항"></ReadForm>
        </Route>
      </Switch>
    </Wrap>
  );
}
export default Notice;
const Wrap = styled.div`
  width: 100%;
  height: 97%;
`;
