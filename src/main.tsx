import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { BrowserRouter } from 'react-router-dom'; //  Correct import

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/boosty-bite-quiz/">
    <App />
  </BrowserRouter>
);