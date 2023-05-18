// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  describe("error handling", () => {
    it("should return false if the shift amount is 0", () => {
      const message = "my message";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is above 25", () => {
      const message = "big shift";
      const shift = 27;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is less than -25", () => {
      const message = "little shift";
      const shift = -28;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("should encode a message by shifting the letters", () => {
      const message = "shift up";
      const shift = 8;
      const actual = caesar(message, shift);
      const expected = "apqnb cx";

      expect(actual).to.equal(expected);
    });

    it("should leaves spaces and other symbols as is", () => {
      const message = "!! special characters ()";
      const shift = 5;
      const actual = caesar(message, shift);
      const expected = "!! xujhnfq hmfwfhyjwx ()";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const message = "ALL CAPS";
      const shift = 2;
      const actual = caesar(message, shift);
      const expected = "cnn ecru";

      expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
      const message = "wxyz";
      const shift = 6;
      const actual = caesar(message, shift);
      const expected = "cdef";

      expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
      const message = "abcd";
      const shift = -6;
      const actual = caesar(message, shift);
      const expected = "uvwx";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by shifting the letters in the opposite direction", () => {
      const message = "phvvdjh";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

    it("should leaves spaces and other symbols as is", () => {
      const message = "d phvvdjh.";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "a message.";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const message = "D pHvvdjh";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "a message";

      expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
      const message = "cheud pdjdclqh";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "zebra magazine";

      expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
      const message = "wbyox jxdxwfkb";
      const shift = -3;
      const actual = caesar(message, shift, false);
      const expected = "zebra magazine";

      expect(actual).to.equal(expected);
    });
  });
});
