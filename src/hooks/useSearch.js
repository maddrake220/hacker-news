import { useCallback } from "react";
import { useState } from "react";

const useSearch = () => {
  const [isSearchOn, setIsSearchOn] = useState(false);
  const onOpenHandler = useCallback(() => {
    setIsSearchOn(true);
  }, []);
  const onCloseHandler = useCallback(() => {
    setIsSearchOn(false);
  }, []);

  return [isSearchOn, onOpenHandler, onCloseHandler];
};
export default useSearch;
