import _ from "lodash";
import { useEffect } from "react";
import { useState } from "react";
const usePaginationFetch = (url, pageSize) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    const paginationData = _.chunk(data, pageSize);
    setData(paginationData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [loading, data];
};

export default usePaginationFetch;
