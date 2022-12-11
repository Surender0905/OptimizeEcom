import Layout from './components/layout/Layout';

import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import UserRoute from './components/UserRoute';
import AuthRoute from './components/AuthRoutes';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

function App() {
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
        });
    } else {
      setLoadingUser(false);
    }
  }, []);

  if (loadingUser) return <div>Loading</div>;
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <UserRoute>
                <Products />
              </UserRoute>
            }
          />
          <Route
            path="/:id"
            element={
              <UserRoute>
                <ProductDetail />
              </UserRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <UserRoute>
                <Cart />
              </UserRoute>
            }
          />
          <Route
            path="/login"
            element={
              <AuthRoute>
                <Login />
              </AuthRoute>
            }
          />
          <Route
            path="/register"
            element={
              <AuthRoute>
                <Register />
              </AuthRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </UserContext.Provider>
  );
}

export default App;
