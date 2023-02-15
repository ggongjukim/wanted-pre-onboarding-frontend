import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import SignIn from './signin';
import SignUp from './signup';
import Todos from './todos';

const token = () => localStorage.getItem('token');
const GoToDo = () => (
  <>{token() != null ? <Todos /> : <Navigate to="/signin" />}</>
);
const GoSignIn = () => (
  <>{token() != null ? <Navigate to="/todos" /> : <SignIn />}</>
);
const GoSignUp = () => (
  <>{token() != null ? <Navigate to="/todos" /> : <SignUp />}</>
);

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<GoSignUp />} />
      <Route path="/signin" element={<GoSignIn />} />
      <Route path="/todos" element={<GoToDo />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
