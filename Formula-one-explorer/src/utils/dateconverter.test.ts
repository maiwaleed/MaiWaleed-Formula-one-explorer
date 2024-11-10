// formatDate.test.ts
import { describe, it, expect } from "vitest"; // Import Vitest functions
import { formatDate } from "./dateConverter"; // Adjust the import path to your formatDate function

describe("formatDate function", () => {
  it("should format a valid date string correctly in default locale (en-US)", () => {
    const date = "1954-01-17";
    const result = formatDate(date);

    // Ensure the date is formatted as expected: "January 17, 1954"
    expect(result).toBe("January 17, 1954");
  });

  it("should format a valid date string correctly in a different locale (de-DE)", () => {
    const date = "1954-01-17";
    const result = formatDate(date, "de-DE"); // German locale

    // Ensure the date is formatted correctly for the German locale: "17. Januar 1954"
    expect(result).toBe("17. Januar 1954");
  });

  it("should throw an error if the date string is invalid", () => {
    const invalidDate = "invalid-date-string";

    // Check that the function throws an error
    expect(() => formatDate(invalidDate)).toThrow("Invalid date format");
  });
});
