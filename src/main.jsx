import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorElement from "./components/ErrorElement/ErrorElement";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route errorElement={<ErrorElement />} path="/" element={<App />}></Route>
      <Route element={<Layout />}>
        <Route
          path="/category"
          element={<div style={{ textAlign: "center" }}>Nothing here yet</div>}
        />
        <Route
          path="/savings"
          element={<div style={{ textAlign: "center" }}>Nothing here yet</div>}
        />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
