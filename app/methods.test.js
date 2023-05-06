import { lengthMethod, pushMethod } from "./methods.js";

describe("Given lengthMethod function", () => {
  describe("When it receives an array of numbers, [1, 3, 5, 7]", () => {
    test("Then it should returns 4", () => {
      const elements = [1, 3, 5, 7];
      const expectedResult = 4;

      const result = lengthMethod(elements);

      expect(result).toBe(expectedResult);
    });
  });
});

describe("Given pushMethod function", () => {
  describe("When it receives an array of numbers, [8, 9, 10], and a 7", () => {
    test("Then it sould return ", () => {
      const array = [8, 9, 10];
      const pushedElement = 7;
      const expectedResult = 4;

      const result = pushMethod(array, pushedElement);

      expect(result).toBe(expectedResult);
    });
  });
});
