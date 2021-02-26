import React from 'react';
import styled from 'styled-components';
import { Link, Route, Switch } from 'react-router-dom';
import { ReadNotice, NoticeList, WrietNotice } from '../components/Index';
interface propsType {
  match: any;
}
function Notice({ match }: propsType) {
  return (
    <Wrap>
      <Switch>
        <Route exact path="/main/notice" component={NoticeList} />
        <Route exact path="/main/notice/write" component={WrietNotice} />
        <Route exact path="/main/notice/post" component={ReadNotice} />
      </Switch>
    </Wrap>
  );
}
export default Notice;
const Wrap = styled.div`
  width: 100%;
  height: 97%;
`;
