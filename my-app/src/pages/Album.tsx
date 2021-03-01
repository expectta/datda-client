import React from 'react';
import styled from 'styled-components';
import {
  Route,
  Switch,
  RouteComponentProps,
  withRouter,
} from 'react-router-dom';
import { CardList, WriteForm } from '../components/Index';
interface propsType {
  location: RouteComponentProps['location'];
  history: RouteComponentProps['history'];
  match: RouteComponentProps['match'];
}
export default function Album({ match }: propsType) {
  return (
    <Wrap>
      <Switch>
        <Route exact path="/main/album">
          <CardList
            title="앨범"
            imageTitle={'종이놀이시간'}
            createdAt={'2021년 2월 2일'}
          ></CardList>
        </Route>
        <Route exact pasth={`${match.path}/write`}>
          <WriteForm title="앨범 등록" type="album"></WriteForm>
        </Route>
      </Switch>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;
