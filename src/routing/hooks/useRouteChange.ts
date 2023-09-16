import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useRouteChange = (callback: () => void) => {
  const location = useLocation();
  useEffect(() => {
    callback();
  }, [location]);
};

export default useRouteChange;
