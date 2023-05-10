import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Product from './pages/Product';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <div>About </div>,
  },
  {
    // it renders this element
    element: <Product />,

    // when the URL matches this segment
    path: "/product/:productId",

    // with this data loaded before rendering
    // loader: async ({ request, params }) => {
    //   return fetch(
    //     `https://fakestoreapi.com/products/${params.productId}`,
    //     { signal: request.signal }
    //   ).then((res)=> res.json())
    //   .then((json)=> console.log(json));
    // },
    // and renders this element in case something went wrong
    errorElement: <div>error</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
