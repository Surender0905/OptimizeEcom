import { useField } from 'formik';
import React from 'react';

const FormikHOC = (IncommingComponent) => {
  return ({ name, ...rest }) => {
    const [data, meta, helper] = useField(name);
    const { value, onChange, onBlur } = data;
    const { touched, error } = meta;

    let border = 'border-gray-300 focus:border-indigo-500';

    if (touched && error) {
      border = 'border-red-300';
    }

    return (
      <IncommingComponent
        touched={touched}
        error={error}
        name={name}
        value={value}
        {...rest}
        onChange={onChange}
        onBlur={onBlur}
      />
    );
  };
};

export default FormikHOC;
