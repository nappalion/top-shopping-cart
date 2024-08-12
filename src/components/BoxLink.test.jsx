import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import BoxLink from "./BoxLink";

describe("BoxLink component", () => {
  it("renders the BoxLink component", () => {
    render(
      <Router>
        <BoxLink />
      </Router>
    );
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("paragraph")).toBeInTheDocument();
  });
});
