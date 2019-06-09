import React from 'react';
import { observer } from 'mobx-react';

import Form from '../atoms/Form';
import Field from '../molecules/Field';
import Button from '../atoms/Button';

const SignUp = ({ form, onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {form.map(field => (
      <Field
        key={field.id}
        label={field.label}
        error={field.error}
        {...field.bind()}
      />
    ))}

    <Button>Sign Up</Button>
  </Form>
);

export default observer(SignUp);
