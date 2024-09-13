import { useState } from "react";

export const useFetching = (callback) => {
  const [isLoading, setIsLoadind] = useState(false);
  const [error, setError] = useState("");

  const fetching = async (...args) => {
    try {
      setIsLoadind(true);
      await callback(...args);
    } catch (e) {
        setError(e.message);
    } finally {
        setIsLoadind(false)
    }
  };
  return [fetching, isLoading, error]
};
