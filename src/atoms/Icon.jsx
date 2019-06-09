import React from 'react';
import cn from 'classnames';

const Icon = ({ facebook, google }) => (
  <div
    className={cn('icon', {
      'icon-facebook': !!facebook,
      'icon-google': !!google,
    })}
  />
);

export default Icon;
