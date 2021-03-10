import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { director, teacher, parents } from '../../assets/testdata';
axios.defaults.withCredentials = true;
import 'dotenv/config';

//! 서버 카카오 로그인 url
const serverLoginUrl = 'https://datda.link/kakao/login'; //! datda 카카오로그인 주소
// const serverLoginUrl = 'http://localhost:5000/kakao/login'; //! 로컬서버의 카카오로그인 주소

if (localStorage.getItem('loginInfo')) {
  console.log(
    (axios.defaults.headers.common['authorization'] = JSON.parse(
      localStorage.getItem('loginInfo')!,
    ).accessToken),
    '토큰있나',
  );
  axios.defaults.headers.common['authorization'] = JSON.parse(
    localStorage.getItem('loginInfo')!,
  ).accessToken;
}
export async function requestLogin(email: string, password: string) {
  const mainData = await axios
    .post('https://datda.link/auth/login', {
      email: email,
      password: password,
    })
    .then((res) => {
      if (res.status === 200) {
        const accessToken: string = res.data.accessToken;
        localStorage.clear();
        //유저의 로그인 정보를 localStorage로 저장.
        localStorage.setItem(
          'loginInfo',
          JSON.stringify({
            isLogin: true,
            accessToken: accessToken,
            permission: res.data.permission,
          }),
        );
        return requestMainData(accessToken);
      } else {
        alert('회원정보가 없습니다');
      }
    })
    .catch((error) => {
      alert(error);
    });
  return mainData;
}

export async function requestKakaoLogin(authorizationCode: string) {
  const mainData = await axios
    .post(serverLoginUrl, {
      authorizationCode: authorizationCode,
    })
    .then((res) => {
      if (res.status === 201) {
        console.log('회원가입을 해주세요.');
      } else if (res.status === 200) {
        localStorage.setItem(
          'loginInfo',
          JSON.stringify({
            isLogin: true,
            accessToken: res.data.accessToken,
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
      console.log(error);
    });
  return mainData;
}

export const isEmailExist = async (email: string) => {
  const results = await axios
    .post('https://datda.link/auth/isemail', {
      // axios.post('http://localhost:5000/auth/isemail', {
      email: email,
    })
    .then((res) => {
      if (res.status === 201) {
        return false;
      } else if (res.status === 200) {
        console.log(res.data);
        return true;
      } else {
        return false;
      }
    })
    .catch((error) => {
      alert(error);
    });
  return results;
};
// 로그인을 성공한 유저가 main 화면에서 보여질 데이터를 서버에 요청.
export function requestMainData(token?: string) {
  axios.defaults.headers.common['authorization'] = token;
  const mainData = axios
    .get('https://datda.link/main')
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      } else if (res.status === 201) {
        return true;
      } else if (res.status === 202) {
        return false;
      } else {
        return undefined;
      }
    })
    .catch((err) => {
      alert(err);
    });
  console.log('반환값', mainData);
  return mainData;
}
// 승인, 미승인 원아 리스트 요청
export function requestApproveChild(childId?: number | null) {
  axios.defaults.headers.common['authorization'] = JSON.parse(
    localStorage.getItem('loginInfo')!,
  ).accessToken;
  const id = childId || null;
  console.log('원아승인시작', id, ' 값은/?');
  const childrenList = axios
    .post('https://datda.link/teacher/approve', {
      childId: id,
    })
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data, ' 애들 ');
        return res.data;
      }
      console.log(res.data, '승인요청 ');
      alert('아이의 정보가 없습니다.');
    })
    .catch((error) => {
      alert(error);
    });
  return childrenList;
}

export function requestApproveTeacher(teacherId?: number | null) {
  axios.defaults.headers.common['authorization'] = JSON.parse(
    localStorage.getItem('loginInfo')!,
  ).accessToken;
  const id = teacherId || null;
  const teacherList = axios
    .post('https://datda.link/institution/approve', { teacherId: id })
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data, '선생님');
        return res.data;
      }
      console.log(res.data, '승인요쳥');
      alert('선생님의 정보가 없습니다');
    })
    .catch((err) => {
      alert(err);
    });
  return teacherList;
}

export function requestGetClassList() {
  axios.defaults.headers.common['authorization'] = JSON.parse(
    localStorage.getItem('loginInfo')!,
  ).accessToken;
  const classList = axios
    .get('https://datda.link/institution/classList')
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      } else {
        alert('데이터가 없습니다');
      }
    })
    .catch((err) => console.log(err));
  return classList;
}

export function requestChangeTeacherClass(teacherId: number, classId: number) {
  axios.defaults.headers.common['authorization'] = JSON.parse(
    localStorage.getItem('loginInfo')!,
  ).accessToken;
  const changeClass = axios
    .post('https://datda.link/institution/changeteacherclass', {
      teacherId: teacherId,
      classId: classId,
    })
    .then((res) => {
      if (res.status === 200) {
        return res.data.message;
      }
      alert('반을 변경할 수 업습니다');
    })
    .catch((err) => {
      alert(err);
    });
  return changeClass;
}

export function requestSearchInsti(value: string) {
  axios.defaults.headers.common['authorization'] = JSON.parse(
    localStorage.getItem('loginInfo')!,
  ).accessToken;

  const instiData = axios
    .post('https://datda.link/guest/searchinstitution', { inputValue: value })
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
      return false;
    })
    .catch((err) => {
      alert(err);
    });
  return instiData;
}

export function requestGetProfile(childId?: string | null) {
  axios.defaults.headers.common['authorization'] = JSON.parse(
    localStorage.getItem('loginInfo')!,
  ).accessToken;
  const profile = axios
    .post('https://datda.link/profile', { childId: Number(childId) })
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
      return false;
    })
    .catch((err) => {
      alert(err);
    });

  return profile;
}

export function requestProfileParentRegister(
  institutionId: string,
  childName: string,
) {
  axios.defaults.headers.common['authorization'] = JSON.parse(
    localStorage.getItem('loginInfo')!,
  ).accessToken;

  const results = axios
    .post('https://datda.link/profile/parentregister', {
      institutionId: Number(institutionId),
      childName: childName,
    })
    .then((res) => {
      if (res.status === 200) {
        return true;
      }
      return false;
    })
    .catch((err) => {
      alert(err);
    });
  return results;
}

export function requestGuestTeacherRegister(institutionId: string) {
  axios.defaults.headers.common['authorization'] = JSON.parse(
    localStorage.getItem('loginInfo')!,
  ).accessToken;
  const result = axios
    .post('https://datda.link/guest/teacherregister', {
      institutionId: Number(institutionId),
    })
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      alert(err);
    });
  return result;
}

export function requestGuestParentRegister(
  childName: string,
  institutionId: string,
) {
  axios.defaults.headers.common['authorization'] = JSON.parse(
    localStorage.getItem('loginInfo')!,
  ).accessToken;
  const result = axios
    .post('https://datda.link/guest/parentregister', {
      childName: childName,
      institutionId: Number(institutionId),
    })
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      alert(err);
    });
  return result;
}

export const getProfile = (): void => {
  axios.get('https://datda.link/userinfo').then((res) => {
    if (res.status === 200) {
      return res.data;
    } else {
      alert('잘못된 요청입니다.');
    }
  });
};
//시간표 등록(원장)
export const requestUploadTimetable = async (timetable: any) => {
  axios.defaults.headers.common['authorization'] = JSON.parse(
    localStorage.getItem('loginInfo')!,
  ).accessToken;
  const result = await axios
    .post('https://datda.link/institution/timetable', {
      timetable: `'${JSON.stringify(timetable)}'`,
    })
    .then((res) => {
      console.log(res.status, res.data);

      return res.data;
    })
    .catch((err) => {
      console.log(err);
      alert('콘솔창에 console.log(err)');
    });
  return result;
};
// 공지사항 요청
// childId: 2, // ! optional. 부모의 경우 required
// category: 'notice', // ! optional 이긴 하나 글 업로드 시에는 required
// ! => category 는 notice / event 둘 중 하나
// title: '제목이다.', // ! optional 이긴 하나 글 업로드 시에는 required
// content: '내용이다. 그러하다.', // ! optional 이긴 하나 글 업로드 시에는 required
// ! < 주의 >
// ! 하나의 API로 작성하다 보니, title 이 빈칸인 상태로 작성하기 버튼을 클릭하는 상황은 client 에서 막아주셔야 합니다.
export async function requestNotice(childId?: number) {
  axios.defaults.headers.common['authorization'] = JSON.parse(
    localStorage.getItem('loginInfo')!,
  ).accessToken;
  const result = await axios
    .post('https://datda.link/notice', {
      childId: childId || null,
    })
    .then((res) => {
      console.log(res.status, res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
}
