import React, { useState, useEffect } from 'react';
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
  list: any;
  handleUpdateList: any;
  handleChangeNotice: any;
  userInfo: {
    permission: string;
    isLogin: boolean;
    mainData: any;
    currentChild: number;
  };
}
function Notice({
  userInfo,
  list,
  handleUpdateList,
  handleChangeNotice,
}: propsType) {
  const urlMatch = useRouteMatch();
  const [inputVlaue, setInputValue] = useState({
    title: '',
    content: '',
    category: '',
  });
  // 사용자 입력 값 핸들러
  const handleInputValue = (
    name: string,
    content: string,
    category: string,
  ) => {
    console.log(name, ' 제목은?', content, '내용은?', category, '카테고리는?');
    setInputValue({
      ...inputVlaue,
      [name]: content,
      category: category,
    });
  };

  return (
    <Wrap>
      <Switch>
        <Route exact path={`${urlMatch.path}`}>
          <ListForm
            permission={userInfo.permission}
            title="공지사항"
            contents={list.currentList}
            handleUpdateList={handleUpdateList}
            handleChangeNotice={handleChangeNotice}
            fristCategory="공지사항"
            secondCategory="행사"
          ></ListForm>
        </Route>
        <Route exact path={`${urlMatch.path}/write`}>
          <WriteForm
            inputVlaue={inputVlaue}
            handleInputValue={handleInputValue}
            userInfo={userInfo}
            title="공지사항 작성"
            type="notice"
          ></WriteForm>
        </Route>
        <Route exact path={`${urlMatch.path}/post/:no`}>
          <ReadForm contents={list.currentList} title="공지사항"></ReadForm>
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
