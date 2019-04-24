import { history } from './router';

const token = JSON.parse(window.localStorage.getItem('token'));

if (token) {
  window.localStorage.setItem('token', JSON.stringify(token));
} else {
  history.push('/login');
}

export default token;
