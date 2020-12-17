import example from "../example";

describe("example", () => {
  describe("given the empty input", () => {
    test("should return 'hello'", () => {
      expect(example()).toEqual("hello");
    });
  });
});
