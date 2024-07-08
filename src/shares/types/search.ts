export type SearchType = {
  filter?: string;
  limit?: number;
  page?: number;
  category?: string;
  userId?: string;
  type?: "organized_event" | "my_event";
  sort?:
    | "nameAz"
    | "nameZa"
    | "newest"
    | "oldest"
    | "early_date"
    | "far_date"
    | "low_price"
    | "high_price";
  status?: "active" | "past" | "all";
};
