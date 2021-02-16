import { useEffect, useState } from "react";
import { getFrontCards , getDecorations } from "../utils/api";


const useCard = () => {
  const [frontCards, setFrontCards] = useState(null);
  const [decorations,setDecorations] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([getFrontCards(), getDecorations()])  //await getFrontCards()  //await getDecorations()
      .then((res) => {
        setFrontCards(res[0]);
        setDecorations(res[1]);
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
    frontCards,
    decorations,
    loading: isLoading,
    error
  };
};

export default useCard;

//? hook  一成就好
//context