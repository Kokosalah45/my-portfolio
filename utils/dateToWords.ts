import { format } from "date-fns";

export default function dateToWords(dateString: string) {
  const dateObj = new Date(dateString);
  const formattedDateStr = format(dateObj, "MM.dd.yyyy");

  return formattedDateStr;
}
