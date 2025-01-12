import { useCallback, useEffect, useState } from "react";

import ApiServiceSingelton from "../../../services/ApiService";

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null); // Reset error state on each fetch attempt

    try {
      // FIXME: remove this
      setTimeout(async () => {
        const response = ApiServiceSingelton.getTemp();

        setData(response);
        setIsLoading(false);
      }, 2000);

      // const response = await ApiServiceSingelton.get();
      // setData(response);
      // setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
    // finally {}
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetchData;
