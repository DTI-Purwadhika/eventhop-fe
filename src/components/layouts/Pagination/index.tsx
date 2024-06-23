import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PaginationType } from "./type";

const Page = ({
  currentPage,
  totalPosts,
  postsPerPage,
  setCurrentPage,
}: PaginationType) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const maxPageNum = 3;
  const pageNumLimit = Math.floor(maxPageNum / 2);

  let activePages = pageNumbers.slice(
    Math.max(0, currentPage - 1 - pageNumLimit),
    Math.min(currentPage - 1 + pageNumLimit + 1, pageNumbers.length)
  );

  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleFirstPage = () => {
    if (currentPage > 1) {
      setCurrentPage(1);
    }
  };

  const handleLastPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(pageNumbers.length);
    }
  };

  const renderPages = () => {
    const renderedPages = activePages.map((page, idx) => (
      <PaginationItem
        key={idx}
        className={currentPage === page ? "bg-neutral-100 rounded-md" : ""}
      >
        <PaginationLink href="#" onClick={() => setCurrentPage(page)}>
          {page}
        </PaginationLink>
      </PaginationItem>
    ));

    if (activePages[0] > 1) {
      renderedPages.unshift(
        <PaginationEllipsis
          key="ellipsis-start"
          onClick={() => setCurrentPage(activePages[0] - 1)}
        />
      );
    }

    if (activePages[activePages.length - 1] < pageNumbers.length) {
      renderedPages.push(
        <PaginationEllipsis
          key="ellipsis-end"
          onClick={() =>
            setCurrentPage(activePages[activePages.length - 1] + 1)
          }
        />
      );
    }

    return renderedPages;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className={`${currentPage === 1 ? "hidden" : ""}`}>
          <PaginationFirst href="#" onClick={handleFirstPage} />
        </PaginationItem>
        <PaginationItem className={`${currentPage === 1 ? "hidden" : ""}`}>
          <PaginationPrevious href="#" onClick={handlePrevPage} />
        </PaginationItem>

        {renderPages()}

        <PaginationItem
          className={`${currentPage === pageNumbers.length ? "hidden" : ""}`}
        >
          <PaginationNext href="#" onClick={handleNextPage} />
        </PaginationItem>
        <PaginationItem
          className={`${currentPage === pageNumbers.length ? "hidden" : ""}`}
        >
          <PaginationLast href="#" onClick={handleLastPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
export default Page;
