import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './signin';
import SignUp from './signup';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
