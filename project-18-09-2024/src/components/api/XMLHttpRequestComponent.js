import React, { useEffect, useState } from "react";

function XMLHttpRequestComponent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.onload = function () {
      if (xhr.status === 200) {
        setUsers(JSON.parse(xhr.responseText));
      } else {
        console.error("Error fetching data");
      }
    };
    xhr.send();
  }, []);

  return (
    <div>
      <h2>Data fetched with XMLHttpRequest</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default XMLHttpRequestComponent;
