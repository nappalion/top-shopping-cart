import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "@src/components/NavBar";
import logoUrl from "@src/assets/images/logo.png";
import UserIcon from "@src/assets/icons/user-fill.svg";
import ShoppingCartIcon from "@src/assets/icons/shopping-cart-fill.svg";
import SearchBar from "@src/components/SearchBar.jsx";
import Icon from "./components/Icon";
import { useState } from "react";

const links = [
  { text: "Home", path: "/" },
  { text: "Shop", path: "shop" },
];

function App() {
  const navigate = useNavigate();
  const [cartQuantity, setCartQuantity] = useState(0);

  const components = [
    <SearchBar onSearch={() => console.log("test")} />,
    <Icon Svg={UserIcon} altText="User" />,
    <Icon
      Svg={ShoppingCartIcon}
      altText="User"
      notificationCount={cartQuantity}
      onClick={() => navigate("/cart")}
    />,
  ];

  return (
    <>
      <NavBar logo={logoUrl} links={links} components={components} />
      <Outlet />
    </>
  );
}

export default App;
