import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Category from "./pages/Category";
import Favourite from "./pages/Favourite";
import GifPage from "./pages/GifPage";
import "./App.css";
import GifProvider from "./context/gif-context";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/search/:query",
          element: <Search />,
        },
        {
          path: "/:category",
          element: <Category />,
        },
        {
          path: "/favourite",
          element: <Favourite />,
        },
        {
          path: "/:type/:slug",
          element: <GifPage />,
        },
      ],
    },
  ]);

  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  );
}

export default App;
