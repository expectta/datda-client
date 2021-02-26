import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

export default function Timetable() {
  return (
    <Wrap>
      <Container>
        <ProgressBar>
          <CurrentEducation id="state-box">
            <EducationWrap>
              <Icon src="../images/nap.png" alt="아이콘"></Icon>
              <CurrentState>
                <Time>
                  <label>{'오전 11 ~ 오후 12:30'}</label>
                </Time>
                <Education>
                  <label>{'정신교육'}</label>
                </Education>
              </CurrentState>
            </EducationWrap>
          </CurrentEducation>
        </ProgressBar>
        <ProgerssBarBack></ProgerssBarBack>
      </Container>

      <TimeTable to="/main/timetable">전체시간표 보기</TimeTable>
    </Wrap>
  );
}
const progerssBar = keyframes`
0%{
	width:40%;
}

100%{
	width:100%;
}`;

const Wrap = styled.div`
  width: 90%;
  height: 20%;
  margin: 0 auto;
  border-bottom: 1px solid #eeeeee;
`;

const CurrentEducation = styled.div`
  width: 180px;
  height: 100px;
  position: relative;
  top: -44px;
  z-index: 3;
  background: white;
  border-radius: 15px 15px 15px 15px;
  box-shadow: 0px 0px 5px #c8c8c8;
`;
const ProgressBar = styled.div`
  width: 89%;
  height: 10px;
  border-radius: 10px;
  background: #ff5722;
  display: flex;
  justify-content: flex-end;
  z-index: 2;
  top: 73px;
  margin-left: 3px;
  position: relative;
  animation: ${progerssBar} 2s ease-in-out;
  animation-fill-mode: forwards;
`;
const ProgerssBarBack = styled.div`
  width: 90%;
  height: 19px;
  position: relative;
  border-radius: 10px;
  top: 59px;
  z-index: -1;
  background: #d3d3d3;
`;
const Icon = styled.img`
  width: 48%;
  height: 100%;
`;
const EducationWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 5px;
  height: 100%;
`;
const CurrentState = styled.span`
  width: 50%;
  height: 100%;
`;
const Time = styled.div`
  width: 100%;
  height: 50%;
`;
const Education = styled.div`
  width: 100%;
  height: 50%;
`;
const Container = styled.div`
  width: 90%;
  height: 80%;
  margin: 0 auto;
`;
const TimeTable = styled(Link)`
  float: right;
  margin-top: 10px;
`;
