import React from 'react';

import Store from './store';
import Login from './index';

const path = '/login';
const action = async () => {
  const store = new Store();

  return <Login store={store} />;
};

export { path, action };
