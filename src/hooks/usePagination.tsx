import { useCallback, useMemo, useState } from "react";

interface IusePaginationProps {
  items: Array<any>;
  max: number;
}

const usePagination = ({ max, items }: IusePaginationProps) => {
  const [currentPage, setPage] = useState(1);
  const lastPage = useMemo(() => Math.ceil(items.length / max), [items, max]);

  const prev = useCallback(
    () => setPage((prev) => (prev <= 1 ? lastPage : prev - 1)),
    [lastPage]
  );

  const next = useCallback(
    () => setPage((prev) => (prev >= lastPage ? 1 : prev + 1)),
    [lastPage]
  );

  const currentWindow = useMemo(
    () => (currentPage - 1) * max,
    [max, currentPage]
  );

  console.log("itens =", items);

  const currentList = useMemo(
    () => items.slice(currentWindow, currentWindow + max),
    [items, currentWindow, max]
  );

  return {
    list: currentList,
    prev,
    next,
    currentPage,
    lastPage,
  };
};

export default usePagination;
