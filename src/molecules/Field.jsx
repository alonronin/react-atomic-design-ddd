import React from 'react';
import cn from 'classnames';

import Label from '../atoms/Label';
import Input from '../atoms/Input';

const Field = ({
  error = '',
  type = 'text',
  label = '',
  value = '',
  ...props
}) => (
  <div
    className={cn('field', {
      'field-value': value && value.length > 0,
      'field-error': error && error.length > 0,
    })}
  >
    <Label for={props.id}>{label}</Label>
    <Input type={type} value={value} {...props} />
    {error && <p>{error}</p>}
  </div>
);

export default Field;
