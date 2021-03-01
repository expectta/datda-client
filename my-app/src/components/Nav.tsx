import React from 'react';
import { withRouter, Link, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
interface propsType {
  location: RouteComponentProps['location'];
  history: RouteComponentProps['history'];
  match: RouteComponentProps['match'];
}
function Nav({ history }: propsType) {
  return (
    <Wrap>
      <WrapLinks>
        <Links to="/main">홈</Links>
        <Links to="/main/profile">프로필</Links>
        {/* <label onClick={() => history.push('/main/profile')}>프로필</label> */}
        <Links to="/">로그아웃</Links>
      </WrapLinks>
    </Wrap>
  );
}
//해당 컴포넌트는 route컴포넌트가 아니기때문에
//history를 사용 할 수 없어 withRouter사용
export default withRouter(Nav);
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
