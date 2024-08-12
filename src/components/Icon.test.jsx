import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Icon from "./Icon";

const CustomComponent = () => <button>Test Button</button>;

describe("Icon component", () => {
  it("renders the Icon component with an image url", () => {
    render(<Icon imageUrl={"test"} svg={CustomComponent} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("renders the Icon component with an SVG", () => {
    render(<Icon Svg={CustomComponent} />);

    expect(
      screen.getByRole("button", { name: /test button/i })
    ).toBeInTheDocument();
  });

  it("renders the Icon component only if there is a notification", () => {
    render(<Icon Svg={CustomComponent} notificationCount={1} />);
    expect(screen.getByRole("paragraph")).toBeInTheDocument();
  });

  it("renders the Icon component only if there is not a notification", () => {
    render(<Icon Svg={CustomComponent} notificationCount={0} />);
    expect(screen.queryByText("0")).not.toBeInTheDocument();
  });
});
