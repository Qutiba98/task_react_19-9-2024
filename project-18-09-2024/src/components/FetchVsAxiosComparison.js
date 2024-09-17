import React, { useState } from "react";
import axios from "axios";

const FetchVsAxiosComparison = () => {
  const [fetchResult, setFetchResult] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [axiosResult, setAxiosResult] = useState(null);
  const [axiosError, setAxiosError] = useState(null);

  // Function to fetch data using Fetch API
  const fetchDataWithFetch = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/invalid-url"
        // https://jsonplaceholder.typicode.com/users
      ); // Simulated failure URL
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setFetchResult(data);
    } catch (error) {
      setFetchError(error.message);
    }
  };

  // Function to fetch data using Axios
  const fetchDataWithAxios = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/invalid-url"
        // https://jsonplaceholder.typicode.com/users
        
      ); // Simulated failure URL
      setAxiosResult(response.data);
    } catch (error) {
      setAxiosError(error.message);
    }
  };

  return (
    <div>
      <h1>Compare Fetch and Axios</h1>
      <button onClick={fetchDataWithFetch}>Fetch with Fetch</button>
      <button onClick={fetchDataWithAxios}>Fetch with Axios</button>

      <div>
        <h2>Fetch API Result:</h2>
        {fetchResult && <pre>{JSON.stringify(fetchResult, null, 2)}</pre>}
        {fetchError && <p>Error: {fetchError}</p>}
      </div>

      <div>
        <h2>Axios Result:</h2>
        {axiosResult && <pre>{JSON.stringify(axiosResult, null, 2)}</pre>}
        {axiosError && <p>Error: {axiosError}</p>}
      </div>
    </div>
  );
};

export default FetchVsAxiosComparison;
