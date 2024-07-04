import { Dispatch, SetStateAction } from "react";

export type PaginationType = {
  currentPage: number;
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};
