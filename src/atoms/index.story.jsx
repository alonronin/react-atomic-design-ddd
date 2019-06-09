import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from './Input';
import Label from './Label';
import Button from './Button';
import Logo from './Logo';
import Icon from './Icon';
import Form from './Form';

storiesOf('Atoms', module)
  .add('Input', () => (
    <Input onChange={e => action('onChange')(e.target.value)} />
  ))

  .add('Input With Data', () => (
    <Input
      value="user@email.com"
      onChange={e => action('onChange')(e.target.value)}
    />
  ))

  .add('Label', () => <Label>Label</Label>)

  .add('Form', () => (
    <Form
      onSubmit={e => {
        e.preventDefault();
        action('onSubmit')(e);
      }}
    >
      <button>Submit</button>
    </Form>
  ))

  .add('Button', () => <Button>Login</Button>)

  .add('Logo', () => <Logo />)

  .add('Icon Facebook', () => <Icon facebook />)

  .add('Icon Google', () => <Icon google />);
