import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './signin/index';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
