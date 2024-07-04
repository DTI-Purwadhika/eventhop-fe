import { format, parseISO } from "date-fns";

export const dateOnly = (dateString: string) => {
  const date = parseISO(dateString);
  return format(date, "d MMMM yyyy");
};

export const timeOnly = (dateString: string) => {
  const date = parseISO(dateString);
  return format(date, "HH:mm");
};
