import { Outlet } from "react-router-dom";
import NavBar from "@src/components/NavBar";
import logoUrl from "@src/assets/images/logo.jpg";
import SearchBar from "@src/components/SearchBar.jsx";

const links = [
  { text: "Home", path: "/" },
  { text: "Shop", path: "shop" },
];

const components = [<SearchBar onSearch={() => console.log("test")} />];

function App() {
  return (
    <>
      <NavBar logo={logoUrl} links={links} components={components} />
      <Outlet />
    </>
  );
}

export default App;
