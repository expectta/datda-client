import axios from 'axios';
import { useHistory } from 'react-router-dom';

const history = useHistory();
export function checkLogin(email: string, password: string) {
  axios
    .post('https://datda.link/auth/login', { email: email, password: password })
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data);
      }
      console.log('넌 모드러감');
    });
}
