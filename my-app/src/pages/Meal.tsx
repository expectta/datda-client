import React from 'react';
import styled from 'styled-components';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { CardList, WriteMeal, WriteForm } from '../components/Index';

interface propsType {
  userInfo: any;
}
export default function Meal({ userInfo }: propsType) {
  const urlMatch = useRouteMatch();
  return (
    <Wrap>
      <Switch>
        <Route exact path={`${urlMatch.path}`}>
          <CardList
            userInfo={userInfo}
            title="급식표"
            imageTitle={'2월 급식표'}
            createdAt={'2021년 2월 2일'}
          ></CardList>
        </Route>
        <Route exact pasth={`${urlMatch.path}/write`}>
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
