import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import { Dashboard, Home } from './pages';
import React from 'react';

const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/charts" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
);

export default App;
