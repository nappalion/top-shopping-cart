import App from "./App";
import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ShopItemPage from "./pages/ShopItemPage";
import ShopPage from "./pages/ShopPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "shop/:category",
        element: <ShopPage />,
      },
      {
        path: "shop-item",
        element: <ShopItemPage />,
      },
    ],
  },
];

export default routes;
