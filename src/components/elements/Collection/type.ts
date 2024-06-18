export type CollectionType = {
  data: any;
  emptyTitle: string;
  emptyDescription: string;
  type: "all_events" | "event_organized" | "my_tickets";
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
};
