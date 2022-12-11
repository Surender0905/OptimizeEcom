import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';

const WithUser = (IncommingComponent) => {
  const outGoingComponent = (props) => {
    const { user, setUser } = useContext(UserContext);
    return <IncommingComponent {...props} user={user} setUser={setUser} />;
  };

  return outGoingComponent;
};

export default WithUser;
