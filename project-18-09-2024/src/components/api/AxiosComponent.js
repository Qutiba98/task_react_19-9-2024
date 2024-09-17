import React, { useEffect, useState } from "react";
import axios from "axios";

function AxiosComponent() {
  const [firstUserName, setFirstUserName] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.data.length > 0) {
          setFirstUserName(response.data[0].name);
        }
      })
      .catch((error) =>
        console.error("Error fetching data with Axios:", error)
      );
  }, []);

  return (
    <div>
      <h2>Data fetched with Axios</h2>
      <p>First User's Name: {firstUserName}</p>
    </div>
  );
}

export default AxiosComponent;
