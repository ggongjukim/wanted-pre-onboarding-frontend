import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUp from './signup/index';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
