import React from 'react';
import styled from 'styled-components';
import { Link, Route, Switch } from 'react-router-dom';
import { ReadForm, ListForm, WriteNotice } from '../components/Index';
interface propsType {
  match: any;
}
function Notice({ match }: propsType) {
  return (
    <Wrap>
      <Switch>
        <Route exact path="/main/notice">
          <ListForm
            title="공지사항"
            fristCategory="공지사항"
            secondCategory="행사"
          ></ListForm>
        </Route>
        <Route exact path="/main/notice/write" component={WriteNotice} />
        <Route exact path="/main/notice/post">
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
