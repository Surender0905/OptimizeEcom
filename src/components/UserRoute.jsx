import React from 'react';
import { Navigate } from 'react-router-dom';
import WithUser from './HOC/WithUser';

const UserRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default WithUser(UserRoute);
