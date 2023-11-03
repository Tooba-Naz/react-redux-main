import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Pages/Home/Index.js";
import Products from "./Pages/Products/Index.js";
import Cart from "./Components/Cart/Index.js";


const router = createBrowserRouter([

  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/products",
    element: <Products/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}


export default App;
