import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, Switch, useRouteMatch, withRouter } from 'react-router-dom';
import { CardList, WriteForm } from '../components/Index';

interface propsType {
  userInfo: any;
}
export default function Album({ userInfo }: propsType) {
  const urlMatch = useRouteMatch();
  const [inputVlaue, setInputValue] = useState({
    title: '',
    content: '',
    type: '',
    category: '',
  });
  // 카테고리에 대한 상태
  const [radioButton, setRadioButton] = useState('');
  //카테고리 상태변환
  const handleClickRadioButton = (category: string) => {
    setRadioButton(category);
  };
  // 사용자 입력 값 핸들러
  const handleInputValue = (name: string, content: string) => {
    console.log(name, ' 제목은?', content, '내용은?');
    setInputValue({
      ...inputVlaue,
      [name]: content,
    });
  };
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
            radioButton={radioButton}
            handleClickRadioButton={handleClickRadioButton}
            handleInputValue={handleInputValue}
            inputVlaue={inputVlaue}
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
