import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Graph from "./components/Graph/Graph";
import Home from "./components/Home/Home";
import MAin from "./layout/MAin";
import Blog from "./components/Blog/Blog";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MAin></MAin>,
      children: [
        {
          path: "/home",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home></Home>,
        },
        {
          path: "/stat",
          element: <Graph></Graph>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
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
    // {
    //   path: "/friend/:id",
    //   loader: async ({ params }) => {
    //     //console.log(params.id);
    //     return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    //   },
    //   element: ,
    // },
  ]);
  return (
    <>
      <div className="App"></div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
