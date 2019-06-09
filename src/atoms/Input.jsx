import React from 'react';

const Input = ({ type = 'text', ...props }) => <input type={type} {...props} />;

export default Input;
