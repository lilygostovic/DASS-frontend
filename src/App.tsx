import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import { Dashboard } from './pages';
import React from 'react';

const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
);

export default App;
