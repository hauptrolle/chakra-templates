import { render, screen } from "@testing-library/react";

import Index from "../pages/index";

describe("Index Page", () => {
  it("should render the headline", () => {
    render(<Index />);

    expect(screen.getByText("Chakra Templates")).toBeInTheDocument();
  });
});
