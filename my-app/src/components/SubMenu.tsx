import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
interface propsType {
  permission: string;
}
export default function SubMenu({ permission }: propsType) {
  return (
    <Wrap>
      {permission === 'director' ? (
        <SubMenuButton to="/main/director">기관설정</SubMenuButton>
      ) : null}
      {permission === 'teacher' ? (
        <SubMenuButton to="/main/management">원아 상태관리</SubMenuButton>
      ) : null}
      <SubMenuButton to="/main/profile">프로필</SubMenuButton>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 10%;
  padding: 2%;

  text-align: center;
`;

const SubMenuButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 3px 0px 3px 0px;
  ${({ theme }) => theme.common.defaultButton}
`;
