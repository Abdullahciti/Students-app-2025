import axios from "axios";
import { useEffect, useState, useCallback } from "react";

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  const fetchData = useCallback(
    async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
        setData([]);
      } finally {
        setIsLoading(false);
      }
    },
    [] // Ensures fetchData is stable across renders
  );

  useEffect(() => {
    const source = axios.CancelToken.source();
    let isMounted = true;

    const load = async () => {
      if (isMounted) {
        await fetchData(dataUrl);
      }
    };

    load();

    return () => {
      isMounted = false;
      source.cancel("Request canceled");
    };
  }, [dataUrl, fetchData]);

  return {
    data,
    isLoading,
    fetchError,
    refetch: () => fetchData(dataUrl), // Expose refetch function
  };
};

export default useAxiosFetch;
