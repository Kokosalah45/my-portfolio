import { format, isValid, parse, parseISO  } from "date-fns";

class DateToWordsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DateToWordsError";
  }
}

export default function dateToWords(dateString: string) {
  try {
    // Input validation
    if (!dateString) {
      throw new Error("Date string is empty");
    }

    // Attempt to parse the input date string
    const dateObj = new Date(dateString);
    console.log({dateObj})
    // Check if the parsed date is valid
    if (!isValid(dateObj)) {
      throw new DateToWordsError("Invalid date");
    }

    // Format the date
    const formattedDateStr = format(dateObj, "MM/dd/yyyy");

    return formattedDateStr;
  } catch (error) {
    if(error instanceof DateToWordsError) {
      console.error(`Error in dateToWords: ${error.message}`);
    }
    // Handle errors gracefully
    // You can choose to return a default value or rethrow the error
    // return "Invalid Date";
    return "Invalid Date";  }
}
