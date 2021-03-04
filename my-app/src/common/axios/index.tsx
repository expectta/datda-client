import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { directorData, teacherData, parentsData } from '../../assets/testdata';

// export function checkLogin(email: string, password: string) {
//   axios
//     .post('https://datda.link/auth/login', { email: email, password: password })
//     .then((res) => {
//       if (res.status === 200) {

//       }
//     });
// }

export function checkLogin(email?: string) {
  localStorage.setItem(
    'loggedInfo',
    JSON.stringify({
      userId: '1',
      isLogged: true,
      accessToken: 'asdf',
      permission: email,
      userData:
        email === 'institution'
          ? { directorData }
          : email === 'teacher'
          ? { teacherData }
          : { parentsData },
    }),
  );
}
