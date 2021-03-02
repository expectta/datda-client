import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function MainMenu() {
  return (
    <Wrap>
      <MenuWrap>
        <IconWrap to="/main/notice">
          <IconImage src="../images/nap.png" alt="공지사항"></IconImage>
          <Describe>공지사항</Describe>
        </IconWrap>
        <IconWrap to="/main/medicine">
          <IconImage src="../images/nap.png" alt="공지사항"></IconImage>
          <Describe>투약의뢰서</Describe>
        </IconWrap>
        <IconWrap to="/main/meal">
          <IconImage src="../images/nap.png" alt="공지사항"></IconImage>
          <Describe>급식표</Describe>
        </IconWrap>
        <IconWrap to="/main/indi_notice">
          <IconImage src="../images/nap.png" alt="공지사항"></IconImage>
          <Describe>알림장</Describe>
        </IconWrap>
        <IconWrap to="/main/album">
          <IconImage src="../images/nap.png" alt="공지사항"></IconImage>
          <Describe>앨범</Describe>
        </IconWrap>
      </MenuWrap>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 100%;
  height: 20%;
  border-top: 1px solid #eeeeee;
`;
const MenuWrap = styled.div`
  width: 95%;
  display: flex;
  height: 100%;
  margin: 0 auto;
  text-align: center;
`;
const IconWrap = styled(Link)`
  flex: 1 auto;
  display: block;
  align-self: center;
`;
const IconImage = styled.img`
  width: 90%;
  display: block;
  height: auto;
`;

const Describe = styled.label`
  display: block;
`;
