import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import App from './App.js';
import Cards from './components/Cards.js';
import Error from './components/Error.js';
import Home from './components/Home.js';
import MyCards from './components/MyCards';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route path="/" element={<Home />} />
      <Route path="/createnewstudycards" element={<Cards />} />
      <Route path="/mystudycards" element={<MyCards />} />
    </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


