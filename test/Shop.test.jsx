// App.test.jsx

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter } from "react-router";
import routes from "../src/routes";
import { RouterProvider } from "react-router/dom";

describe("Shop component", () => {
  it("renders Shop on /shop", () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });
    render(<RouterProvider router={router} />);
    expect(screen.getByRole("paragraph").textContent).toMatch(/Shop/i);
  });
});
