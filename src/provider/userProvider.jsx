import { UserContext } from '../App';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const [loadingUser, setLoadingUser] = useState(true);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      axios
        .get('https://myeasykart.codeyogi.io/me', {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setUser(response.data);
          setLoadingUser(false);
        })
        .catch(() => {
          localStorage.removeItem('token');
          setLoadingUser(false);
        });
    } else {
      setLoadingUser(false);
    }
  }, []);

  if (loadingUser) {
    return <div>Loading...</div>;
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
