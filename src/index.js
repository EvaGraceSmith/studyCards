import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
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
import CardDetails from './components/CardDetails';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route path="/" element={<Home />} />
      <Route path="/createnewstudycards" element={<Cards />} />
      <Route path="/mystudycards" element={<MyCards />} />
      <Route path="/carddetails/:subject" element={<CardDetails />} />
    </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>

);


