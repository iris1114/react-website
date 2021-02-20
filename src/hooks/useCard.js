import { useEffect, useState } from "react";
import { getDecorations } from "../utils/api";

const useCard = () => {
  const [decorations, setDecorations] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getDecorations()
      .then((res) => {
        setDecorations(res);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    decorations,
    loading: isLoading,
    error,
  };
};

export default useCard;
