import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [message, setMessage] = useState("Sale starts in 5 seconds");
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => clearTimeout(timer); // Clean up the timer on component unmount
    } else {
      setMessage("Sale started!");
    }
  }, [seconds]);

  return (
    <div>
      <h1>{message}</h1>
      {seconds > 0 && <p>Time remaining: {seconds} seconds</p>}
    </div>
  );
}

export default CountdownTimer;
