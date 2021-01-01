import { toSentenceCase } from "./index";

describe("utils", () => {
  describe("toSentenceCase", () => {
    const testData = [
      ["navigation", "Navigation"],
      ["pageSections", "Page Sections"],
      ["imageWithTextAndCTA", "Image With Text And CTA"],
    ];

    testData.map((data) => {
      it("should format to sentence case", () => {
        expect(toSentenceCase(data[0])).toEqual(data[1]);
      });
    });
  });
});
