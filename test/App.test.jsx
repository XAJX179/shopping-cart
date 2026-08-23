// App.test.jsx

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter } from "react-router";
import routes from "../src/routes";
import { RouterProvider } from "react-router/dom";

describe("App component", () => {
  it("renders App on /", () => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);
    expect(screen.getByRole("heading", { name: /Homepage/i }));
  });
});
