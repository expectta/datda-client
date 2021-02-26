import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Timetable, MiniNotice, MiniIndiNotice, MainMenu } from './Index';

export default function Contents() {
  const [clickedMenu, setClickedMenu] = useState(0);
  const handleChangeMenu = (menu: number) => {
    setClickedMenu(menu);
  };
  return (
    <Wrap>
      <BookMarkWrap>
        <BookMark
          checked={clickedMenu}
          order={30}
          className={clickedMenu === 0 ? 'active' : ''}
          onClick={() => handleChangeMenu(0)}
        >
          <Name>{'이인수'}</Name>
        </BookMark>
        <BookMark
          checked={clickedMenu}
          order={20}
          className={clickedMenu === 1 ? 'active' : ''}
          onClick={() => handleChangeMenu(1)}
        >
          {' '}
          <Name>{'심종훈'}</Name>
        </BookMark>
        <BookMark
          checked={clickedMenu}
          order={10}
          className={clickedMenu === 2 ? 'active' : ''}
          onClick={() => handleChangeMenu(2)}
        >
          {' '}
          <Name>{'박한솔'}</Name>
        </BookMark>
      </BookMarkWrap>
      <ContentCard>
        <Timetable></Timetable>
        <MainMenu></MainMenu>
        <MiniNotice></MiniNotice>
        <MiniIndiNotice></MiniIndiNotice>
      </ContentCard>
    </Wrap>
  );
}
interface Property {
  checked: number;
  order: number;
}
const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentCard = styled.div`
  ${({ theme }) => theme.common.contentCardDiv}
`;

const BookMark = styled.button<Property>`
  width: 80px;
  height: 40px;
  background: white;
  border-radius: 15px 15px 0px 0px;
  transform: perspective(100px) rotateX(45deg);
  cursor: pointer;
  border: 0;
  outline: 0;
  z-index: ${(props) => props.order};
  box-shadow: 0px 0px 5px #c8c8c8;
  &:focus {
    display: none;
  }
`;
const BookMarkWrap = styled.div`
  display: flex;
  padding-left: 20px;
  position: relative;
  top: 3px;
  button div {
    color: #bcbbbb;
  }
  .active {
    background: #6f6eff;
    color: #0b0c21;
    z-index: 100;
    div {
      color: white;
    }
  }
`;
const Name = styled.div`
  color: white;
  font-size: 16px;
  transform: unset;
  margin-top: 6px;
  transform: perspective(40px) rotateX(-15deg);
`;
