import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";

const links = [
  { text: "Home", path: "/" },
  { text: "Shop", path: "shop" },
];

const CustomComponent = () => <button>Test Button</button>;

const components = [<CustomComponent />];

describe("NavBar component", () => {
  it("renders the NavBar component", () => {
    render(
      <Router>
        <NavBar links={links} components={components} />
      </Router>
    );
    const linkElements = screen.getAllByRole("link");
    expect(linkElements).toHaveLength(3);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Shop")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /test button/i })
    ).toBeInTheDocument();
  });
});
