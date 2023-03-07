import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import { Cases, Dashboard, Home } from './pages';
import React from 'react';

const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/summary" element={<Dashboard/>} />
        <Route path="/cases" element={<Cases/>} />
      </Routes>
    </BrowserRouter>
);

export default App;
