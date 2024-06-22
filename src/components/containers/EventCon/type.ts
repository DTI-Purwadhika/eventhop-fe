export default interface EventConType {
  groupBy: string;
  sortBy?: "week" | "month" | "location" | "hot";
  sortOrder?: "asc" | "desc";
}
