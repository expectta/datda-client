import React from 'react';
import styled from 'styled-components';
import {
  Route,
  Switch,
  RouteComponentProps,
  useRouteMatch,
} from 'react-router-dom';
import { CardList, StateListForm, WriteForm } from '../components/Index';
interface propsType {
  userInfo: any;
}
export default function Management({ userInfo }: propsType) {
  const urlMatch = useRouteMatch();
  return (
    <Wrap>
      <Switch>
        <Route exact path={`${urlMatch.path}`}>
          <StateListForm
            title="원아 상태관리"
            fristCategory="전체"
            secondCategory="반별"
          ></StateListForm>
        </Route>
        <Route pasth={`${urlMatch.path}/write`}>
          <WriteForm
            userInfo={userInfo}
            title="급식표 등록"
            type="meal"
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
const ContentCard = styled.div`
  ${({ theme }) => theme.common.contentCardDiv}
`;
