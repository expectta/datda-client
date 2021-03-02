import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function SubMenu() {
  return (
    <Wrap>
      <SubMenuBar to="/main/report">기관설정</SubMenuBar>
      <SubMenuBar to="/main/education">원아 상태관리</SubMenuBar>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 100%;
  text-align: center;
`;

const SubMenuBar = styled(Link)`
  display: block;
  margin-top: 10px;
  width: 100%;
  ${({ theme }) => theme.common.defaultButton}
`;
