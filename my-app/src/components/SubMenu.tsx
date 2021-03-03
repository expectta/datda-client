import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function SubMenu() {
  return (
    <Wrap>
      <SubMenuBar to="/main/director">기관 설정</SubMenuBar>
      <SubMenuBar to="/main/report">버그리포트</SubMenuBar>
      <SubMenuBar to="/main/education">교육 프로그램</SubMenuBar>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const SubMenuBar = styled(Link)`
  display: block;
  margin-top: 10px;
  width: 100%;
  ${({ theme }) => theme.common.defaultButton}
`;
