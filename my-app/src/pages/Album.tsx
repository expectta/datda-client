import React from 'react';
import styled from 'styled-components';
import { Route, Switch, useRouteMatch, withRouter } from 'react-router-dom';
import { CardList, WriteForm } from '../components/Index';

interface propsType {
  userInfo: any;
}
export default function Album({ userInfo }: propsType) {
  const urlMatch = useRouteMatch();
  return (
    <Wrap>
      <Switch>
        <Route exact path={`${urlMatch.path}`}>
          <CardList
            userInfo={userInfo}
            title="앨범"
            imageTitle={'종이놀이시간'}
            createdAt={'2021년 2월 2일'}
          ></CardList>
        </Route>
        <Route exact pasth={`${urlMatch.path}/write`}>
          <WriteForm
            userInfo={userInfo}
            title="앨범 등록"
            type="album"
          ></WriteForm>
        </Route>
      </Switch>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;
