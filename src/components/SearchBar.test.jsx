import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";

describe("SearchBar component", () => {
  it("renders the SearchBar component", () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("clicking button triggers onSearch if there is input", async () => {
    const mockFn = vi.fn();
    const user = userEvent.setup();
    render(<SearchBar onSearch={mockFn} />);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(mockFn).not.toHaveBeenCalled();

    const input = screen.getByRole("textbox");
    await userEvent.type(input, "test query");
    await user.click(button);

    expect(mockFn).toHaveBeenCalled();
  });

  it("pressing enter triggers onSearch if there is input", async () => {
    const mockFn = vi.fn();
    const user = userEvent.setup();
    render(<SearchBar onSearch={mockFn} />);

    const button = screen.getByRole("button");
    button.focus();
    await user.click(button, "{enter}");
    expect(mockFn).not.toHaveBeenCalled();

    const input = screen.getByRole("textbox");
    await user.type(input, "test query");
    await user.click(button, "{enter}");
    expect(mockFn).toHaveBeenCalled();
  });

  it("typing in button triggers input refocus", async () => {
    const user = userEvent.setup();
    render(<SearchBar />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    button.focus();
    await user.keyboard("a");
    expect(input).toHaveFocus();
  });

  it("is accessible with keyboard navigation", async () => {
    const user = userEvent.setup();
    render(<SearchBar />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    await user.tab();
    expect(input).toHaveFocus();

    await user.tab();
    expect(button).toHaveFocus();

    await user.tab();
    expect(input).not.toHaveFocus();
    expect(button).not.toHaveFocus();
  });

  it("onSearch is not called if not provided", async () => {
    const mockFn = vi.fn();
    const user = userEvent.setup();
    render(<SearchBar />);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(mockFn).not.toHaveBeenCalled();
  });
});
