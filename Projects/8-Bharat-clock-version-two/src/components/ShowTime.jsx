import { useEffect, useState } from "react";

export function ShowTime() {
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTimer(new Date()), 1000);

    return () => clearInterval(setTimer); //cleanup on unmount
  }, []);

  return (
    <h2>
      This is the current time :{timer.toLocaleDateString()} -{" "}
      {timer.toLocaleTimeString()}
    </h2>
  );
}
