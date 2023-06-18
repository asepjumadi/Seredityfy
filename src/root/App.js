import React from 'react'
import { createBrowserRouter,RouterProvider,Routes,Route } from 'react-router-dom'
import { Welcome } from '../page/Welcome';
import { Contact } from '../page/Contact';
import { Home } from '../page/Home';
import { Update } from '../page/Update';
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
      <Route path="/home/*" element={<Home />} />
      <Route path="/update/*" element={<Update />} />
    </Routes>
  );
}
 