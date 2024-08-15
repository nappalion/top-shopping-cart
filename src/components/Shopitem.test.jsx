import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShopItem from "./ShopItem";

describe("ShopItem component", () => {
  it("renders the ShopItem component", () => {
    render(<ShopItem />);
    const paragraphElements = screen.getAllByRole("paragraph");
    expect(paragraphElements).toHaveLength(2);
  });

  it("clicking component container runs onClick()", async () => {
    const mockFn = vi.fn();
    const user = userEvent.setup();
    render(<ShopItem onClick={mockFn} />);

    const container = screen.getByTestId("container");
    await user.click(container);

    expect(mockFn).toBeCalled();
  });

  it("hover displays button", async () => {
    const mockFn = vi.fn();
    const quickShopMockFn = vi.fn();
    const user = userEvent.setup();
    render(<ShopItem onClick={mockFn} onQuickShop={quickShopMockFn} />);

    const container = screen.getByTestId("inner-container");
    await user.hover(container);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("clicking button runs onQuickShop()", async () => {
    const mockFn = vi.fn();
    const quickShopMockFn = vi.fn();
    render(<ShopItem onClick={mockFn} onQuickShop={quickShopMockFn} />);
    const user = userEvent.setup();

    const container = screen.getByTestId("inner-container");
    await user.hover(container);

    const button = screen.getByRole("button");
    await fireEvent.click(button);

    expect(mockFn).not.toBeCalled();
    expect(quickShopMockFn).toBeCalled();
  });
});
