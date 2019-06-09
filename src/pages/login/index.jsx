import React from 'react';
import { observer } from 'mobx-react';

import LogIn from '../../organism/Login';
import Logo from '../../atoms/Logo';
import Icon from '../../atoms/Icon';

const Login = ({ store }) => {
  return (
    <div className="page">
      <Logo />
      <LogIn form={store.form} onSubmit={store.onSubmit} />

      <p className="icons">
        <Icon facebook />
        <Icon google />
      </p>

      <p className="footer">
        Dont have an account? <br />
        <a href="">Sign Up</a>
      </p>
    </div>
  );
};

export default observer(Login);
