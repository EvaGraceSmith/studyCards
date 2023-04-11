import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import Cards from './components/Cards.js';
import Error from './components/Error.js';
import Home from './components/Home.js';
import CardTest from './components/CardTest';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route path="/" element={<Home />} />
      <Route path="/createnewstudycards" element={<Cards />} />
      <Route path="/mystudycards" element={<CardTest />} />
    </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


