import React from 'react'
import { createBrowserRouter,RouterProvider,Routes,Route } from 'react-router-dom'
import { Welcome } from '../page/Welcome';
import { Update } from '../page/Update';
import { Price } from '../page/Price';
import Register from '../page/Register';
import { Features } from '../page/Features';
const router = createBrowserRouter([
    {
      path: "*",
      element: <Root />,
      
    },
  ]);

export const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}
function Root() {

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/features/*" element={<Features />} />
      <Route path="/price/*" element={<Price />} />
      <Route path="/update/*" element={<Update />} />
      <Route path="/signup/*" element={<Register />} />
    </Routes>
  );
}
 