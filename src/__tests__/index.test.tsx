import { render, screen } from "@testing-library/react";

import Index from "../pages/index";

describe("Index Page", () => {
  it("should render the headline", () => {
    render(
      <Index
        tree={{
          path: "/foo/bar",
          name: "templates",
          children: [
            {
              path: "foo/bar/navigation",
              name: "navigation",
              children: [
                {
                  path: "/foo/bar/navigation/navbar/",
                  name: "navbar",
                  children: [
                    {
                      path:
                        "/Users/achim.rolle/workspace/github/chakra-templates/src/pages/templates/navigation/navbar/simple.tsx",
                      name: "simple.tsx",
                      size: 135,
                      extension: ".tsx",
                      type: "file",
                    },
                  ],
                  size: 209,
                  type: "directory",
                },
              ],
              size: 209,
              type: "directory",
            },
          ],
          size: 209,
          type: "directory",
        }}
      />
    );

    expect(screen.getByText("Chakra Templates")).toBeInTheDocument();
  });
});
