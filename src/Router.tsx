import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import SignIn from './signin';
import SignUp from './signup';
import Todos from './todos';

const token = () => localStorage.getItem('token');
const GoSignUp = () => <>{token() ? <Navigate to="/todos" /> : <SignUp />}</>;
const GoSignIn = () => <>{token() ? <Navigate to="/todos" /> : <SignIn />}</>;
const GoTodos = () => <>{token() ? <Todos /> : <Navigate to="/signin" />}</>;

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
      <Route path="/signup" element={<GoSignUp />} />
      <Route path="/signin" element={<GoSignIn />} />
      <Route path="/todos" element={<GoTodos />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
