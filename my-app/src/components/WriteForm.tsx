import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link, useRouteMatch, withRouter } from 'react-router-dom';
import { ImagePostForm, TextAreaForm } from './Index';
interface propsType {
  title: string;
  type: string;
  userInfo: {
    userId: string;
    permission: string;
    institution: string;
    isLogin: boolean;
  };
}
//object 사용시 key와 value의 type을 지정해야한다.
interface objectType {
  [key: string]: JSX.Element;
}
function WriteForm({ title, type, userInfo }: propsType) {
  const urlMatch = useRouteMatch();
  const PREVIOUS_PAGE = -1;
  //메뉴별 선택적으로 화면 구성
  const printContent: objectType = {
    medicine: <TextAreaForm />,
    notice: <TextAreaForm />,
    meal: <ImagePostForm userInfo={userInfo} />,
    indiNotice: <TextAreaForm />,
    album: <ImagePostForm userInfo={userInfo} />,
  };
  return (
    <Wrap>
      <Title>{title}</Title>
      <TitleWrapper>
        <SubTitle>
          <TitleInput required placeholder="제목"></TitleInput>
        </SubTitle>
        <Writer>{'작성자'}</Writer>
      </TitleWrapper>
      <Container>{printContent[type]}</Container>
      <ButtonWrapper>
        <PostButton to="/main/notice">작성완료</PostButton>
        <CancleButton onClick={() => history.go(PREVIOUS_PAGE)}>
          취소
        </CancleButton>
      </ButtonWrapper>
    </Wrap>
  );
}
export default WriteForm;
const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;
const ContentCard = styled.div`
  ${({ theme }) => theme.common.contentCardDiv}
`;
const Title = styled.div`
  ${({ theme }) => theme.common.contentTitle}
`;
const Container = styled.div`
  width: 95%;
  height: 85%;
  display: grid;
  grid-gap: 1%;
  padding: 1%;
  margin: 0 auto;
`;
const TitleWrapper = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
`;
const TitleInput = styled.input`
  width: 100%;
  ${({ theme }) => theme.common.defaultInput}
`;
const SubTitle = styled.span`
  flex: 1 auto;
`;
const Writer = styled.span`
  flex: 1 auto;
  text-align: right;
`;

const TextBox = styled.textarea`
  width: 100%;
  padding: 2%;
  height: 50%;
  outline: none;
  border: 0px;
  resize: none;
  ::placeholder {
    color: #dbdbdb;
  }
  margin-top: 2%;
  border-radius: 15px 15px 15px 15px;
  box-shadow: 0px 0px 5px #c8c8c8;
`;
const ButtonWrapper = styled.div`
  text-align: center;
  height: auto;
  a {
    margin: 2%;
  }
`;
const PostButton = styled(Link)`
  ${({ theme }) => theme.common.defaultButton}
`;
const CancleButton = styled.span`
  ${({ theme }) => theme.common.defaultButton}
`;
