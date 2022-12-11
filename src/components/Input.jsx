import React from 'react';

const Input = ({ id, label, name, className, touched, errors, ...rest }) => {
  let border = 'border-gray-300 focus:border-indigo-500';

  if (touched && errors) {
    border = 'border-red-300';
  }

  return (
    <div className="mb-6">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={name}
        className={
          ' class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "' +
          className +
          ' ' +
          border
        }
        {...rest}
      />
      {touched && errors && <span className="text-red-600">{errors}</span>}
    </div>
  );
};

export default Input;
