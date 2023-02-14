import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';

import Router from './Router';

const App = () => (
  <RecoilRoot>
    <Router />
    <ReactQueryDevtools />
  </RecoilRoot>
);

export default App;
