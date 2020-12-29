import { toSentenceCase } from "./index";

describe("utils", () => {
  describe("toSentenceCase", () => {
    const testData = [
      ["navigation", "Navigation"],
      ["pageSections", "Page Sections"],
    ];

    testData.map((data) => {
      it("should format to sentence case", () => {
        expect(toSentenceCase(data[0])).toEqual(data[1]);
      });
    });
  });
});
