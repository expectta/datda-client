import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <span>홈</span>
      <Link to="/userinfo">
        <span>프로필</span>
      </Link>
      <span>로그아웃</span>
    </div>
  );
}

export default Nav;
