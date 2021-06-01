import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePage = (pageChange) => {
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    if (currentPath) {
      pageChange(currentPath.substr(1));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPath]);

  return currentPath;
};

export default usePage;
