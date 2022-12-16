import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';

const WithUser = (IncommingComponent) => {
  const outGoingComponent = (props) => {
    const contextData = useContext(UserContext);
    return <IncommingComponent {...props} {...contextData} />;
  };

  return outGoingComponent;
};

export default WithUser;
