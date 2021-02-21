import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      여기는 로그인 공간입니다.
      <Link to="/main">
        <button></button>
      </Link>
    </div>
  );
}

export default Login;
