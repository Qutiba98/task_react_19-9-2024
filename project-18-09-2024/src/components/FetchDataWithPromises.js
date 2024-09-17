import React, { useState, useEffect } from "react";

// Function to fetch data using .then()
const fetchDataWithThen = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      throw new Error(error);
    });
};

// Function to fetch data using async/await
const fetchDataWithAwait = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
};

const FetchDataWithPromises = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Using .then() version
    fetchDataWithThen()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });

    // Using async/await version (comment out the .then() version above to use this)
    /*
    const fetchData = async () => {
      try {
        const result = await fetchDataWithAwait();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    */
  }, []);

  return (
    <div>
      <h1>Fetch Data with Promises</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h2>Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FetchDataWithPromises;
