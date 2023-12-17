import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Cart from "./components/Cart";
import Details from "./components/Details";

function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/details",
          element: <Details />,
        },
        {
          path: "register",
          element: <Registration />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  const fallbackElement = <div>Oops! Something went wrong.</div>; // You can customize this fallback UI
  const future = router;
  return (
    <div>
      <RouterProvider
        router={router}
        fallbackElement={fallbackElement}
        future={future}
      />
    </div>
  );
}

export default App;
