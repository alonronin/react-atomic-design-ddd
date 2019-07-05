import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import LogInPage from './';
import Store from './store';

const store = new Store();

store.onSubmit = e =>
  store.form.onSubmit(e, {
    onSuccess(form) {
      action('Success')(form.values());
    },
    onError(form) {
      action('Error')(form.errors());
    },
  });

storiesOf('Pages').add('Login', () => <LogInPage store={store} />);
