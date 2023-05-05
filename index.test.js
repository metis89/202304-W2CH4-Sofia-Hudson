import createLenghtMethod from "./index.js";

describe("Given createLengthMethod function", () => {
  describe("When it receives 'hello'", () => {
    test("Then it should returns 4", () => {
      const word = [1, 3, 5, 7];
      const expectedResult = 4;

      const result = createLenghtMethod(word);
      expect(result).toBe(expectedResult);
    });
  });
});
