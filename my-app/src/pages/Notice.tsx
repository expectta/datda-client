import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { requestNotice } from '../common/axios';
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
    currentChild: number;
  };
}
function Notice({ userInfo }: propsType) {
  const [notice, setNotice] = useState({
    event: [],
    notice: [],
    all: [],
  });
  //notice 상태 업데이트
  const handleUpdateNotice = async () => {
    const childId =
      userInfo.permission === 'parent'
        ? userInfo.mainData[userInfo.currentChild].childId
        : null;
    const result = await requestNotice(childId);
    console.log(result, '결과값은?');
    console.log(childId, ' 지금 아이는??');
    if (result) {
      setNotice({
        event: result.ElEvent,
        notice: result.ElNotice,
        all: result.noticeInfo,
      });
    }
  };
  useEffect(() => {
    console.log('시작');
    handleUpdateNotice();
  }, []);
  const urlMatch = useRouteMatch();
  return (
    <Wrap>
      <Switch>
        <Route exact path={`${urlMatch.path}`}>
          <ListForm
            permission={userInfo.permission}
            title="공지사항"
            contents={notice.notice}
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
