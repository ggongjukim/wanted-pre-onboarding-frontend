import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './signin';
import SignUp from './signup';
import Todos from './todos';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
