import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TimeTableCard } from '../components/Index';
import { requestUploadTimetable } from '../common/axios';
interface propType {
  userInfo: any;
}
export default function Timetable({ userInfo }: propType) {
  // 시간표 상태
  const [timetable, setTimtable] = useState({
    list:
      userInfo.permission === 'parent'
        ? userInfo.mainData[userInfo.currentChild].timetable!
        : userInfo.mainData.timetable,
  });
  const handleAddTimetable = () => {
    console.log('추가');
  };
  useEffect(() => {
    // requestUploadTimetable();
  }, []);
  return (
    <Wrap>
      <ContentCard>
        <Title>시간표</Title>
        {timetable.list.map((element: any, index: number) => {
          return <TimeTableCard></TimeTableCard>;
        })}
        <AddText>
          <AddButton onClick={handleAddTimetable}>추가하기</AddButton>
        </AddText>
      </ContentCard>
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
  width:100%;
  border-bottom: 1px solid lightgray;
`;
const AddText = styled.div`
  width: 100%;
  height: 3%;
  text-align: center;
  margin-top: 3%;
  color: #6f6eff;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`;
const AddButton = styled.span`
  cursor: pointer;
`;
