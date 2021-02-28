import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface propsType {
  title: string;
}
export default function ReadForm({ title }: propsType) {
  return (
    <Wrap>
      <ContentCard>
        <Title>{title}</Title>
        <Container>
          <TitleWrapper>
            <SubTitle>{'제목'}</SubTitle>
            <Writer>{'작성자'}</Writer>
          </TitleWrapper>
          <TextBox></TextBox>
        </Container>
      </ContentCard>
      <ButtonWrapper>
        <PostButton to="/main/notice">수정</PostButton>
        <PostButton to="/main/notice">삭제</PostButton>
        <PostButton to="/main/notice">목록</PostButton>
      </ButtonWrapper>
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
const Title = styled.div`
  ${({ theme }) => theme.common.contentTitle}
`;
const Container = styled.div`
  width: 95%;
  height: 86%;
  margin: 0 auto;
`;
const TitleWrapper = styled.div`
  display: flex;
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
  height: 100%;
  outline: none;
  border: 0px;
  resize: none;
  margin-top: 2%;
  border-radius: 15px 15px 15px 15px;
  box-shadow: 0px 0px 5px #c8c8c8;
`;
const ButtonWrapper = styled.div`
  text-align: center;
  width: 95%;
  height: auto;
  margin: 2%;
  a {
    margin: 2%;
  }
`;
const PostButton = styled(Link)`
  ${({ theme }) => theme.common.defaultButton}
`;
const CancleButton = styled(Link)`
  ${({ theme }) => theme.common.defaultButton}
`;
