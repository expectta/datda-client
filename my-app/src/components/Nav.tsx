import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <span>홈</span>
      <span>알림</span>
      <Link to="/userinfo">
        <span>정보</span>
      </Link>
    </div>
  );
}

export default Nav;
