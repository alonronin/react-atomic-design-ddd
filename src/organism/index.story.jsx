import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import LogIn from './Login';
import loginForm from './login.form';
import signupForm from './signup.form';
import SignUp from './SignUp';

const onSubmit = form => e =>
  form.onSubmit(e, {
    onSuccess(form) {
      action('Submit')(form.values());
    },

    onError(form) {
      action('Error')(form.errors());
    },
  });

storiesOf('Organism', module).add('Login Form', () => (
  <LogIn form={loginForm} onSubmit={onSubmit(loginForm)} />
));

storiesOf('Organism', module).add('Sign Up Form', () => (
  <SignUp form={signupForm} onSubmit={onSubmit(signupForm)} />
));
