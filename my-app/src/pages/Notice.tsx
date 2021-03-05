import React from 'react';
import styled from 'styled-components';
import {
  Link,
  match,
  Route,
  Switch,
  useRouteMatch,
  RouteComponentProps,
} from 'react-router-dom';
import {
  ReadForm,
  ListForm,
  WriteNotice,
  WriteForm,
} from '../components/Index';
interface propsType {
  userInfo: {
    permission: string;
    isLogin: boolean;
    mainData: any;
  };
}
function Notice({ userInfo }: propsType) {
  const urlMatch = useRouteMatch();
  return (
    <Wrap>
      <Switch>
        <Route exact path={`${urlMatch.path}`}>
          <ListForm
            permission={userInfo.permission}
            title="공지사항"
            fristCategory="공지사항"
            secondCategory="행사"
          ></ListForm>
        </Route>
        <Route exact path={`${urlMatch.path}/write`}>
          <WriteForm
            userInfo={userInfo}
            title="공지사항 작성"
            type="notice"
          ></WriteForm>
        </Route>
        <Route exact path={`${urlMatch.path}/post`}>
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
