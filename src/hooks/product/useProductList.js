import { useEffect, useState } from "react";
import { getProducts } from "../../utils/api";


const useProductList = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then((res) => {
        setProducts(res);
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
    products,
    loading: isLoading,
    error
  };
};

export default useProductList;
