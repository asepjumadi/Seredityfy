import React from 'react'
import { createBrowserRouter,RouterProvider,Routes,Route } from 'react-router-dom'
import { Welcome } from '../page/Welcome';
import { Contact } from '../page/Contact';
import { Update } from '../page/Update';
import { Price } from '../page/Price';
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
      <Route path="/contact/*" element={<Contact />} />
      <Route path="/price/*" element={<Price />} />
      <Route path="/update/*" element={<Update />} />
    </Routes>
  );
}
 