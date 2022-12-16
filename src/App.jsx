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

import Alert from './components/Alert';
import UserProvider from './provider/userProvider';
import AlertProvider from './provider/AlertProvider';

export const UserContext = createContext();

function App() {
  return (
    <UserProvider>
      <AlertProvider>
        <Alert />
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
      </AlertProvider>
    </UserProvider>
  );
}

export default App;
