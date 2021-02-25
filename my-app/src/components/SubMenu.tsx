import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function SubMenu() {
  return (
    <Wrap>
      <SubMenuBar>버그리포트</SubMenuBar>
      <SubMenuBar>교육 프로그</SubMenuBar>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const SubMenuBar = styled.button`
  margin-top: 10px;
  width: 100%;
  ${({ theme }) => theme.common.defaultButton}
`;
