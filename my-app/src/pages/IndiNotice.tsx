import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { ListForm, WriteForm } from '../components/Index';
interface propsType {
  userInfo: any;
  handleUpdateList: any;
  list: any;
  handleChangeNotice: any;
}
export default function IndiNotice({
  userInfo,
  list,
  handleChangeNotice,
  handleUpdateList,
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
  useEffect(() => {
    handleUpdateList();
  }, []);
  return (
    <Wrap>
      <Switch>
        <Route exact path={`${urlMatch.path}`}>
          <ListForm
            title="알림장"
            handleUpdateList={handleUpdateList}
            handleChangeNotice={handleChangeNotice}
            contents={list}
            fristCategory="수신"
            secondCategory="발송"
            permission={userInfo.permission}
          ></ListForm>
        </Route>
        <Route exact path={`${urlMatch.path}/write`}>
          <WriteForm
            handleInputValue={handleInputValue}
            inputVlaue={inputVlaue}
            userInfo={userInfo}
            title="알림장 작성"
            type="indiNotice"
          ></WriteForm>
        </Route>
      </Switch>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 100%;
  height: 97%;
`;
