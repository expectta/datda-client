import axios from 'axios';
import { useHistory } from 'react-router-dom';

const history = useHistory();
export function handleLogin(email: string, password: string) {
  axios
    .post('https://datda.link/login', { email: email, password: password })
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data);
      }
    });
}
