import { formatPrice } from "./utils";

describe("utils", () => {
  describe("formatPrice", () => {
    it("should return the price formatted with spaces", () => {
      expect(formatPrice(100)).toEqual("100");
      expect(formatPrice(1000)).toEqual("1 000");
      expect(formatPrice(1000.75)).toEqual("1 000.75");
      expect(formatPrice(1000.7589)).toEqual("1 000.7589");
      expect(formatPrice(10000000)).toEqual("10 000 000");
    });
  });
});
