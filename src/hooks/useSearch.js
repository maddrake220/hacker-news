import { useCallback } from "react";
import { useState } from "react";

const useSearch = () => {
  const [isSearchOn, setIsSearchOn] = useState(false);
  const [prevSearch, setPrevSearch] = useState("");
  const [search, setSearch] = useState("");
  const onSearchingHandler = useCallback(() => {
    setPrevSearch(search);
    setIsSearchOn(false);
  }, [search]);
  const onOpenHandler = useCallback(() => {
    setIsSearchOn(true);
  }, []);
  const onCloseHandler = useCallback(() => {
    setIsSearchOn(false);
  }, []);

  return [
    search,
    prevSearch,
    setSearch,
    isSearchOn,
    onOpenHandler,
    onCloseHandler,
    onSearchingHandler,
  ];
};
export default useSearch;
