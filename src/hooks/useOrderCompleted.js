import { useEffect, useState } from "react";
import { getOrders } from "../utils/api";


const useOrderCompleted = (authToken) => {
  const [orders, setOrders] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getOrders(authToken)
      .then((res) => {
        setOrders(res);
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
    orders,
    loading: isLoading,
    error
  };
};

export default useOrderCompleted;