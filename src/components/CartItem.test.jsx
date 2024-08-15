import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import CartItem from "./CartItem";
import userEvent from "@testing-library/user-event";

describe("CartItem component", () => {
  it("renders the CartItem component", () => {
    render(<CartItem />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("clicking button triggers onRemove()", async () => {
    const mockFn = vi.fn();
    const user = userEvent.setup();

    render(<CartItem onRemove={mockFn} />);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(mockFn).toBeCalled();
  });

  it("selecting option triggers onQuantityChange()", async () => {
    const mockFn = vi.fn();
    const user = userEvent.setup();

    render(<CartItem onQuantityChange={mockFn} />);

    const select = screen.getByRole("combobox");
    await user.selectOptions(select, "2");

    expect(mockFn).toHaveBeenCalledWith("2");
    expect(select.value).toBe("2");
  });

  it("default value set for select element", async () => {
    const mockFn = vi.fn();
    const user = userEvent.setup();

    render(<CartItem quantity={3} />);

    const select = screen.getByRole("combobox");

    expect(select.value).toBe("3");
  });
});
