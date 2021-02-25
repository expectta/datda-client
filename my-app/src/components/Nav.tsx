import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Nav() {
  return (
    <Wrap>
      <WrapLinks>
        <Links to="/main">홈</Links>
        <Links to="/userinfo">프로필</Links>
        <Links to="/">로그아웃</Links>
      </WrapLinks>
    </Wrap>
  );
}

export default Nav;
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  background: #6f6eff;
`;
const Links = styled(Link)`
  color: white;
  align-self: center;
  margin-right: 20px;
  flex: 1 auto;
  place-self: center;
  ${({ theme }) => theme.fontSizes.base};
`;
const WrapLinks = styled.div`
  align-self: center;
  @media ${({ theme }) => theme.device.mobileL} {
    width: 100%;
    display: flex;
    a {
      flex: 1 auto;
      text-align: center;
    }
  }
`;
