import { useState } from "react";

interface IusePaginationProps {
  items: Array<any>;
  max: number;
}

const usePagination = ({ max, items }: IusePaginationProps) => {
  // const max = list.length / max
  const [currentPage, setPage] = useState(0);
  const limit = Math.floor(items.length / max);

  console.log();

  const prev = () => setPage((prev) => (prev <= 0 ? items.length : prev - 1));
  const next = () => setPage((prev) => (prev >= limit ? 0 : prev + 1));

  return {
    list: items.slice(currentPage),
    prev,
    next,
    currentPage,
  };
};

export default usePagination;
