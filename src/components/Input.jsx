import React from 'react';
import FormikHOC from './FormikHOC';

const Input = ({ id, label, name, className, touched, error, ...rest }) => {
  let border = 'border-gray-300 focus:border-indigo-500';

  if (touched && error) {
    border = 'border-red-300';
  }

  return (
    <div className="border">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        className={'border ' + className + ' ' + border}
        {...rest}
      />
      {touched && error && <span className="text-red-600">{error}</span>}
    </div>
  );
};

export const FormikInput = FormikHOC(Input);

export default Input;
