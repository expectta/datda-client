import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link, useRouteMatch, withRouter } from 'react-router-dom';
import { ImagePostForm, TextAreaForm, WriteMedicineForm } from './Index';
import { requestNotice } from '../common/axios';
interface propsType {
  title: string;
  type: string;
  inputVlaue: any;
  handleInputValue: any;
  userInfo: {
    permission: string;
    isLogin: boolean;
    mainData: any;
  };
}
//object 사용시 key와 value의 type을 지정해야한다.
interface objectType {
  [key: string]: JSX.Element;
}
function WriteForm({
  title,
  type,
  userInfo,
  handleInputValue,
  inputVlaue,
}: propsType) {
  const urlMatch = useRouteMatch();
  const PREVIOUS_PAGE = -1;
  //메뉴별 선택적으로 화면 구성
  const printContent: objectType = {
    medicine: (
      <WriteMedicineForm type={type} handleInputValue={handleInputValue} />
    ),
    notice: <TextAreaForm type={type} handleInputValue={handleInputValue} />,
    meal: <ImagePostForm userInfo={userInfo} />,
    indiNotice: (
      <TextAreaForm type={type} handleInputValue={handleInputValue} />
    ),
    album: <ImagePostForm userInfo={userInfo} />,
  };
  //제목 입력에 대한 핸들러
  const handleTitleValue = (e: any) => {
    const { name, value } = e.target;
    handleInputValue(name, value, type);
  };
  //작성 글 등록 요청
  const handleRequestPost = async () => {
    const { title, content, category } = inputVlaue;
    // console.log('등록요청');
    // console.log(type, '현재 타입은??');
    if (type === 'notice') {
      // console.log('공지사항 등록요청 완료');
      const result = await requestNotice(title, content, category);
      // console.log(result, '공지사항 등록요청 완료');
      history.go(PREVIOUS_PAGE);
    }
  };
  // console.log(type, ' 현재의 타입은!! ');
  return (
    <Wrap>
      {type === 'medicine' ? (
        <TitleWrapper>
          <SubTitle>
            <TitleInput
              required
              placeholder="제목"
              name="title"
              onChange={(e: any) => handleTitleValue(e)}
            ></TitleInput>
          </SubTitle>
          <Writer>작성자 : {userInfo.mainData.userName}</Writer>
        </TitleWrapper>
      ) : (
        <>
          <Title>{title}</Title>
          <TitleWrapper>
            <SubTitle>
              <TitleInput
                required
                placeholder="제목"
                name="title"
                onChange={(e: any) => handleTitleValue(e)}
              ></TitleInput>
            </SubTitle>
            <Writer>작성자 : {userInfo.mainData.userName}</Writer>
          </TitleWrapper>
        </>
      )}

      <Container>{printContent[type]}</Container>
      <ButtonWrapper>
        <PostButton onClick={() => handleRequestPost()}>작성완료</PostButton>
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
  display: flex;
  justify-content: center;
  a {
    margin: 2%;
  }
`;
const PostButton = styled.div`
  ${({ theme }) => theme.common.defaultButton}
`;
const CancleButton = styled.span`
  ${({ theme }) => theme.common.defaultButton}
  margin-left:3%;
`;
