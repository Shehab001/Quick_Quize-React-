import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Graph from "./components/Graph/Graph";
import Home from "./components/Home/Home";
import MAin from "./layout/MAin";
import Blog from "./components/Blog/Blog";

import Quize from "./components/Quize/Quize";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <MAin></MAin>
        </div>
      ),
      children: [
        {
          path: "/home",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: (
            <div>
              <Home></Home>
            </div>
          ),
        },
        {
          path: "/stat",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Graph></Graph>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/quize/:id",
          loader: async ({ params }) => {
            //console.log(params.id);
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <Quize></Quize>,
        },

        // {
        //   path: "/fetch",
        //   loader: async () => {
        //     return fetch("");
        //   },
        //   element: ,
        // },
      ],
    },
    {
      path: "*",
      element: <div>404</div>,
    },
  ]);
  return (
    <>
      <div className="App"></div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
