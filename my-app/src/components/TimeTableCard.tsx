import react from 'react';
import styled from 'styled-components';

export default function TimetableCard() {
  return (
    <>
      <CardWrapper>
        <Container>
          <NumberWrapper>
            <Number>No.{1}</Number>
          </NumberWrapper>
          <TimeWrapper>
            <Time>시간</Time>
            <InputTime></InputTime>
            <span>~</span>
            <InputTime></InputTime>
          </TimeWrapper>
          <ContentsWrapper>
            <Contents>내용</Contents>
            <InputContents></InputContents>
          </ContentsWrapper>
        </Container>
      </CardWrapper>
    </>
  );
}
const Container = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
`;
const NumberWrapper = styled.span`
  display: flex;
  flex: 1 auto;
  font-size: 1rem;
`;
const TimeWrapper = styled.span`
  display: flex;
  flex: 2 auto;
`;
const ContentsWrapper = styled.span`
  display: flex;
  flex: 5 auto;
`;
const Number = styled.span`
  font-size: 1.2rem;
  flex: 1 auto;
`;
const InputNumber = styled.input`
  ${({ theme }) => theme.common.defaultInput}flex: 1 auto;
`;
const Time = styled.span`
  flex: 1 auto;
`;
const InputTime = styled.input`
  width: 3rem;
  ${({ theme }) => theme.common.defaultInput}flex: 1 auto;
`;
const Contents = styled.span`
  flex: 1 auto;
`;
const InputContents = styled.input`
  width: 5rem;
  ${({ theme }) => theme.common.defaultInput}flex: 2 auto;
`;

const CardWrapper = styled.div`
  ${({ theme }) => theme.common.defaultCardDiv}
  width:95%;
  height: auto;
  margin: 0 auto;
  margin-top: 2%;
  padding: 2%;
  display: flex;
`;
