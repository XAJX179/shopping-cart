// App.test.jsx

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter } from "react-router";
import routes from "../src/routes";
import { RouterProvider } from "react-router/dom";

describe("Cart component", () => {
  it("renders Cart on /cart", () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/cart"] });
    render(<RouterProvider router={router} />);
    expect(screen.getByRole("heading", { name: /Cart/i }));
  });
});
