import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { CardList, WriteMeal, WriteForm } from '../components/Index';

interface propsType {
  userInfo: any;
}
export default function Meal({ userInfo }: propsType) {
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
          <CardList
            userInfo={userInfo}
            title="급식표"
            imageTitle={'2월 급식표'}
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
