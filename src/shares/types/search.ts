export type SearchType = {
  filter?: string;
  limit?: number;
  page?: number;
  category?: string;
  sort?:
    | "nameAz"
    | "nameZa"
    | "newest"
    | "oldest"
    | "early_date"
    | "far_date"
    | "low_price"
    | "high_price";
};
