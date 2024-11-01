interface IUseInifniteListProps {
  directions: "vertical" | "horizontal";
  row?: number;
  col?: number;
}

interface IUseInifniteListHook {
  prev: () => void;
  next: () => void;
}

const useInifiniteList = ({ directions, row, col }: IUseInifniteListProps) => {
  const prev = () => {};

  const next = () => {};

  return {
    prev,
    next,
  };
};

export default useInifiniteList;
