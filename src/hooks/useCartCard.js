import { useEffect, useState } from "react";
import { getCards } from "../utils/api";

const useCartCard = (authToken) => {
  const [cards, setCards] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getCards(authToken)
      .then((res) => {
        setCards(res);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [authToken]);

  return {
    cards,
    loading: isLoading,
    error,
  };
};

export default useCartCard;
