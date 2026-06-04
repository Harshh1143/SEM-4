import React from "react";
import { useState, useEffect } from "react";
export default function UE2() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);
  return <div>{date.toLocaleTimeString()}</div>;
}
