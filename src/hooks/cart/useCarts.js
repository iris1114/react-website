import { useEffect, useState } from "react";
import { getCarts } from "../../utils/api";

const useCarts = (localAuthToken) => {
  const [carts, setCarts] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    getCarts(localAuthToken)
      .then((res) => {
       setCarts(res)
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [localAuthToken]);

  return {
    carts,
    loading: isLoading,
    error
  };
};

export default useCarts;