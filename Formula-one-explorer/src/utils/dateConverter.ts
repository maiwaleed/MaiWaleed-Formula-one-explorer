/**
 * Formats a given date string into the format: "Month day, year"
 *
 * @param date - The date string in ISO format (e.g. "1954-01-17")
 * @param locale - The locale to format the date (defaults to 'en-US')
 * @returns The formatted date string
 */
export function formatDate(date: string, locale: string = "en-US"): string {
  const parsedDate = new Date(date);

  // Check if the date is valid
  if (isNaN(parsedDate.getTime())) {
    throw new Error("Invalid date format");
  }

  return parsedDate.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
