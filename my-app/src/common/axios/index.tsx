import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { director, teacher, parents } from '../../assets/testdata';

if (localStorage.getItem('loginInfo')) {
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common['Authorization'] = JSON.parse(
    localStorage.getItem('loginInfo')!,
  ).accessToken;
}

export async function requestLogin(email: string, password: string) {
  const mainData = await axios
    .post('https://datda.link/auth/login', { email: email, password: password })
    .then((res) => {
      if (res.status === 200) {
        const accessToken: string = res.data.accessToken;
        //유저의 로그인 정보를 localStorage로 저장.
        localStorage.setItem(
          'loginInfo',
          JSON.stringify({
            isLogin: true,
            accessToken: accessToken,
            permission: res.data.permission,
          }),
        );
      }
      console.log('로그인됨');
      //TODO : main 화면에 사용될 데이터 요청
      //main 화면 용 데이터가 정상적으로 받아진다면 상태를 저장
      //저장 후 화면 랜더링
      if (res.data.permission === 'institution') {
        console.log('원장 데이터 반환');
        return director;
      }
      if (res.data.permission === 'parent') {
        console.log('부모  데이터 반환');
        return parents;
      }
      if (res.data.permission === 'teacher') {
        console.log('선생 데이터 반환');
        return teacher;
      }
    })
    .catch((error) => {
      alert(error);
    });
  return mainData;
}

export const isEmail = (email: string) => {
  axios
    .post('https://datda.link/auth/isemail', {
      // axios.post('http://localhost:5000/auth/isemail', {
      email: email,
    })
    .then((res) => {
      console.log(res.status, res.data);
      alert('콘솔창에 console.log(res.status, res.data)');
    })
    .catch((err) => {
      console.log(err);
      alert('콘솔창에 console.log(err)');
    });
};

export function requestMainData(permission: string) {
  // const mainData =
  // axios
  //   .get('https://datda.link/main')
  //   .then((res) => {
  //     console.log(res.status, res.data);
  //     alert('콘솔창에 console.log(res.status, res.data)');
  if (permission === 'institution') {
    console.log('원장 데이터 반환');
    return director;
  }
  if (permission === 'parent') {
    console.log('부모  데이터 반환');
    return parents;
  }
  if (permission === 'teacher') {
    console.log('선생 데이터 반환');
    return teacher;
  }
  // })
  // .catch((err) => {
  //   console.log(err);
  //   alert('콘솔창에 console.log(err)');
  // });
}
