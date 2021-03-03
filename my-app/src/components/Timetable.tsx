import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { timetable } from '../assets/testdata';
import { findStepEducation } from '../common/utils/findCurrentEducation';

interface propsType {
  step: number;
  previousStep: number;
}
export default function Timetable() {
  // 현재 시간 상태
  const [time, setTime] = useState('');
  // timetable 상태
  const [currentTimeTable, setCurrentTimeTable] = useState({
    step: 0,
    previousStep: 0,
    currentTime: '',
    currentEducation: '',
    totalTimetable: timetable.data,
  });
  // 현재 진행중인 교육상태 업데이트
  useEffect(() => {
    // console.log(time, ' 현재시간');
    const currentEducation = findStepEducation(
      time,
      currentTimeTable.totalTimetable,
    );
    setCurrentTimeTable({
      ...currentTimeTable,
      // currentTime: currentEducation!.time,
      step: currentEducation?.step,
      currentTime: currentEducation?.timetable,
      currentEducation: currentEducation?.currentEducation,
    });
  }, [time]);

  // 현재 시간 업데이트
  const tick = () => {
    const date = new Date();
    const hour: string = date.getHours().toString();
    let minute: string = date.getSeconds().toString();
    // let minute: string = date.getMinutes().toString();

    if (minute.length === 1) {
      minute = '0' + minute;
      // console.log('분이 이상', hour, '시', minute, '분');
    }
    setTime(`${hour}${minute}`);
  };
  useEffect(() => {
    setInterval(tick, 1000);
  }, []);
  //09시부터 ~ 18시까지 정규수업
  if (Number(time) > 900 && Number(time) < 1700) {
    setInterval(tick, 1000);
  }
  useEffect(() => {
    // console.log(
    //   currentTimeTable.step,
    //   '현재스탭',
    //   currentTimeTable.previousStep,
    //   '이전스탭',
    // );
    setCurrentTimeTable({
      ...currentTimeTable,
      previousStep: currentTimeTable.step,
    });
  }, [currentTimeTable.step]);
  return (
    <Wrap>
      {time ? (
        <>
          <Container>
            <ProgerssBarBack>
              <ProgressBar
                previousStep={currentTimeTable.previousStep}
                step={currentTimeTable.step}
              >
                <CurrentEducation id="state-box">
                  <EducationWrap>
                    <Icon src="../images/education.png" alt="아이콘"></Icon>
                    <CurrentState>
                      <Time>
                        <label>
                          {currentTimeTable.currentTime ||
                            '정규수업시간이 아닙니다'}
                        </label>
                      </Time>
                      <Education>
                        <label>{currentTimeTable.currentEducation}</label>
                      </Education>
                    </CurrentState>
                  </EducationWrap>
                </CurrentEducation>
              </ProgressBar>
            </ProgerssBarBack>
          </Container>
          <TimeTable to="/main/timetable">전체시간표 보기</TimeTable>
        </>
      ) : (
        <Loader>로딩중</Loader>
      )}
    </Wrap>
  );
}
const progerssBar = (previousStep: any, step: any) => keyframes`
0%{
	width:${previousStep}%;
}

100%{
	width:${step}%;
}`;

const Wrap = styled.div`
  height: 14%;
  margin: 0 auto;
  width: 85%;
`;

const CurrentEducation = styled.div`
  width: 120px;
  height: 70px;
  position: absolute;
  top: -27px;
  right: -41px;
  z-index: 3;
  background: white;
  border-radius: 6px 6px 6px 6px;
  box-shadow: 0px 0px 5px #c8c8c8;
`;
const ProgressBar = styled.div<propsType>`
  width: 75%;
  height: 12px;
  left: -3px;
  border-radius: 10px;
  background: #6f6eff;
  display: inline-block;
  justify-content: flex-end;
  z-index: 2;
  margin-left: 3px;
  position: relative;
  animation: ${(props) => progerssBar(props.previousStep * 10, props.step * 10)}
    2s ease-in-out;
  animation-fill-mode: forwards;
`;
const ProgerssBarBack = styled.div`
  height: 14px;
  position: relative;
  border-radius: 10px;
  top: 37px;
  margin: 0 auto;
  border: 1px solid #d0cdcd;
  background: #f0ecec;
`;
const Icon = styled.img`
  width: auto;
  height: 51px;
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
  display: inline-grid;
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
  width: 85%;
  height: 80%;
  margin: 0 auto;
`;
const TimeTable = styled(Link)`
  float: right;
`;

const Loader = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  padding-top: 10%;
`;
