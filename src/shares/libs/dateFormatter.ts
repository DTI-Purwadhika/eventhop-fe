import { format, parseISO } from "date-fns";

export const dateFormatter = (
  dateString: string,
  formatter = "d MMMM yyyy"
) => {
  if (dateString) {
    const date = parseISO(dateString);
    return format(date, formatter);
  }
};
