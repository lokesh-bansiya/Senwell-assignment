// src/hooks/useFetchUsers.js
import { useState, useEffect } from "react";

const useFetchUsers = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
        setFilteredData(result);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, filteredData, setFilteredData, loading, error };
};

export default useFetchUsers;
